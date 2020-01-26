const functions = require('firebase-functions');

const bot = require('./zenBot')
exports.zenBot = functions.https.onRequest(bot.handler)
