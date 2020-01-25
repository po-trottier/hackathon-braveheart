const functions = require('firebase-functions');

const bot = require('./routes/bot_to_zen')
exports.bot2zen = functions.https.onRequest(bot.handler)

const keywords = require('./routes/keywords')
exports.keywords = functions.https.onRequest(keywords.handler)