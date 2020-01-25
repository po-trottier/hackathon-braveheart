const functions = require('firebase-functions');

const bot = require('./bot_to_zen')
exports.bot2zen = functions.https.onRequest(bot.handler)