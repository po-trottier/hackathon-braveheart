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
    console.log("notting went wrong in init")
    return { logs, config, smooch }
})()

//Request handler
express.use('/',  async ({body}, res, next) => {
    await logs.doc('BODY').set(body)
    
    try{
        if(!body.messages){
            await smooch.appUsers.sendMessage(body.appUser._id, {
                type: 'text',
                text: `Hey ${body.appUser.givenName}, how do you feel today?`,
                role: 'appMaker'
            })
        }
        else {
            const text = body.messages[0].text
            if(text.includes('thank')){
                await smooch.appUsers.sendMessage(body.appUser._id, {
                    type: 'text',
                    text: `You're welcome ${body.appUser.givenName}`,
                    role: 'appMaker'
                })
            }
            else{
                const result = JSON.parse(await request(`https://us-central1-braveheart-265cb.cloudfunctions.net/keywords/?message=${text}`))
                await smooch.appUsers.sendMessage(body.appUser._id, {
                    text: 'Here\'s a little something to pimp you up !',
                    role: 'appMaker',
                    type: 'text',
                    actions: [
                        {
                            type: 'link',
                            text: 'V Drop the bass V',
                            uri: result.url
                        }
                    ]
                })
            }
        }
    }
    catch(e){
        console.log(`request failed ${e.message}`)
    }
    
    res.end()
})

//Error handling
express.use( async ({message}, req, res, next) => {
    console.log(message)
    await logs.doc('ERROR').set({message})
    res.status(500).send('OOPSY')
})

exports.handler = express