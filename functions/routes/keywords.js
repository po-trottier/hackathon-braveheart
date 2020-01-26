// const w2v = require( 'word2vec' );
// const path = require('path');

function getUrl(message, callback) {
    // TODO: Implement proper ML
    // Disabled because the results are very inconsistent
    // The ML Model needs to be trained for more extensive periods of time with better data

    // w2v.loadModel(path.resolve(__dirname, '../datasets/vectors.txt'), (err, model) => {
    //     if (err) {
    //         return callback(err, null);
    //     }
    //     const similarity = model.similarity( 'happy', 'joyful' );
    //     return callback(null, similarity);
    // });

    // Simili-AI
    const negative = message.includes('not') || message.includes('ain\'t') || message.includes('don\'t');
    const happy = message.includes('happy') || message.includes('good') || message.includes('joyful') || message.includes('smiley');

    if (happy) {
        // TODO Send Firebase Request to Ben's API
        // TODO Return Ben's URL
        return callback(null, 'https://braveheart-265cb.web.app/player/happy');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/happy');
    }
    // TODO Do all the other cases
    return callback(null, 'https://braveheart-265cb.web.app/player/sad');
}

exports.handler = (req, res) => {
    getUrl(req.query.message, (err, url) => {
        if (err) {
            res.json({ error: err });
        }
        res.json({ url });
    });
};
