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
    const sad = message.includes('sad') ;
    const mad = message.includes('mad');
    const love = message.includes('love');
    const relax = message.includes('relax');
    const party = message.includes('party');
    const motivation = message.includes('motivation');
    const sleep = message.includes('sleep');
    const study = message.includes('study');
    const mood_booster = message.includes('mood_booster');


    if (happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/happy');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/sad');
    }
    
    if (sad) {
        return callback(null, 'https://braveheart-265cb.web.app/player/sad');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/happy');
    }

    if (mad) {
        return callback(null, 'https://braveheart-265cb.web.app/player/mad');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/relax');
    }

    if (love) {
        return callback(null, 'https://braveheart-265cb.web.app/player/love');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/sad');
    }

    if (relax) {
        return callback(null, 'https://braveheart-265cb.web.app/player/relax');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/mood_booster');
    }

    if (party) {
        return callback(null, 'https://braveheart-265cb.web.app/player/party');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/relax');
    }

    if (motivation) {
        return callback(null, 'https://braveheart-265cb.web.app/player/motivation');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/relax');
    }

    if (sleep) {
        return callback(null, 'https://braveheart-265cb.web.app/player/sleep');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/party');
    }

    if (study) {
        return callback(null, 'https://braveheart-265cb.web.app/player/study');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/party');
    }

    if (mood_booster) {
        return callback(null, 'https://braveheart-265cb.web.app/player/mood_booster');
    } else if (negative && happy) {
        return callback(null, 'https://braveheart-265cb.web.app/player/sad');
    }
}

exports.handler = (req, res) => {
    getUrl(req.query.message, (err, url) => {
        if (err) {
            res.json({ error: err });
        }
        res.json({ url });
    });
};
