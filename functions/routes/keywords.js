const natural = require('natural');

function getUrl(message, callback) {
    natural.BayesClassifier.load('./datasets/classifier.json', null, (err, classifier) => {
        if (err) {
            return callback(null, 'https://www.youtube.com/watch?v=oHg5SJYRHA0', false);
        }
        return callback(null, 'https://localhost:8080/player/' + classifier.classify(message), false);
    });
}

exports.handler = (req, res) => {
    if (!req.query.message) {
        res.json({ error: 'No message provided' });
        return;
    }
    getUrl(req.query.message.toLowerCase(), (err, url, isDefined = true) => {
        if (err) {
            res.json({ error: err });
        }
        res.json({ url, isDefined });
    });
};
