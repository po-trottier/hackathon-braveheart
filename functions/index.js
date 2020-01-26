const functions = require('firebase-functions');

//Init Service
const admin = require('firebase-admin')
admin.initializeApp({
    credential: admin.credential.cert(require("./braveheart-265cb-firebase-adminsdk-510ee-f0ea13f66c.json")),
    databaseURL: "https://braveheart-265cb.firebaseio.com"
})
console.log("firestore init")

//Declare functions
const keywords = require('./routes/keywords')
exports.keywords = functions.https.onRequest(keywords.handler)

const bot = require('./routes/zenBot')
exports.zenBot = functions.https.onRequest(bot.handler)

const exporter = require('./routes/exporter')
exports.exporter = functions.https.onRequest(exporter.handler)

exports.hostProxy = functions.https.onRequest( async (req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.end( await require('request-promise')('https://braveheart-265cb.web.app/'))
})