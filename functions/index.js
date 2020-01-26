const functions = require('firebase-functions');

const keywords = require('./routes/keywords')
exports.keywords = functions.https.onRequest(keywords.handler)

const bot = require('./routes/zenBot')
exports.zenBot = functions.https.onRequest(bot.handler)
