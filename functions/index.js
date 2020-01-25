const functions = require('firebase-functions');

const bot = require('bot-to-zen.js')
functions.https.onRequest(bot.handler)