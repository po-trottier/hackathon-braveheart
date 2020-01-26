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
    //Log
    console.log('new request')
    await logs.doc('BODY').set(body)
    console.log('body set')
    
    //Call kw
    console.log('requesting kw')
    let result
    try{
        result = await request(`http://0.0.0.0/keywords/?message=${body.messages.text}`)
    }
    catch(e){
        console.log(`request failed ${e.message}`)
    }
    console.log('kw responded')

    //Send smooch
    console.log('requesting smooch')
    try{
        await smooch.appUsers.sendMessage(body.appUser._id, {
            type: 'text',
            text: `Live long and prosper ${result}`,
            role: 'appMaker'
        })
    }
    catch(e){
        console.log(`request failed ${e.message}`)
    }
    console.log('smooch responded')

    //End
    res.end()
})

//Error handling
express.use( async ({message}, req, res, next) => {
    console.log(message)
    await logs.doc('ERROR').set({message})
    res.status(500).send('OOPSY')
})

exports.handler = express