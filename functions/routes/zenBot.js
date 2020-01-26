const request = require('request-promise')
const express = require('express')()

//Init
const { logs, config, smooch } = (()=>{
    //Get stores
    const logs = require('firebase-admin').firestore().collection('fb2zenBotLogs')
    const config = require('firebase-functions').config()
    const smooch = new (require('smooch-core'))({
        keyId: 'app_5e2cff87268bc6000f2d2600',
        secret: 'FtFzxDGNYPqOi0MB6mED0HaCvRv19stBrjhl_uSH3oVC7JA1U4cD94cU-qp2H-gYx4lQ_xKzl4FSjaWd4LNwbA',
        scope: 'app'
    })

    //Return stores
    console.log("nothing went wrong in init")
    return { logs, config, smooch }
})()

//Request handler
express.use('/',  async ({body}, res, next) => {
    await logs.doc('BODY').set(body)
    
    try{
        switch(body.trigger){
            case "delivery:success":
            await smooch.appUsers.sendMessage(body.appUser._id, {
                text: 'What else can I do for you ?',
                role: 'appMaker',
                type: 'text',
            })            
            break;
            case "conversation:start":
                await smooch.appUsers.sendMessage(body.appUser._id, {
                    type: 'text',
                    text: `Hey ${body.appUser.givenName}, how are you feeling today?`,
                    role: 'appMaker'
                })
            break;
            case "message:appUser": {
                let text = ""
                if(body.messages && body.messages[0]) text = body.messages[0].text
                let isThanks = false
                
                if(text.includes('thank')){
                    isThanks = true
                    await smooch.appUsers.sendMessage(body.appUser._id, {
                        type: 'text',
                        text: `You're welcome ${body.appUser.givenName}. What else can I do for you?`,
                        role: 'appMaker'
                    })
                }
                await ( async () => {//its dum but only for eslint to shut up
                    const result = JSON.parse(await request(`https://us-central1-braveheart-265cb.cloudfunctions.net/keywords/?message=${text}`))
                    await smooch.appUsers.sendMessage(body.appUser._id, {
                        text: result.isDefined || isThanks ? 'Here\'s a playlist you might feel like listening to!' : 'Sorry, I did not understand what you meant. So here\'s our pick!',
                        role: 'appMaker',
                        type: 'text',
                        actions: [
                            {
                                type: 'link',
                                text: 'Open Custom Playlist',
                                uri: result.url
                            }
                        ]
                    })
                })()
                break;
            }
        }    
    }
    catch(e){
        console.log(`request failed ${e.message}`)
    }
    finally{
        res.end()
    }
})

//Error handling
express.use( async ({message}, req, res, next) => {
    console.log(message)
    await logs.doc('ERROR').set({message})
    res.status(500).send('OOPSY')
})

exports.handler = express