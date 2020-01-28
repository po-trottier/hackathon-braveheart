const fs = require('fs');
const path = require('path');
const natural = require('natural');
let file;

try {
    file = JSON.parse(fs.readFileSync(path.resolve('./datasets/feelings.json'), 'utf-8'));
} catch (e) {
    console.error(e);
    process.exit(1);
}

const classifier = new natural.BayesClassifier();
file.feelings.forEach((val) => {
    classifier.addDocument(val.values, val.feeling);
});

classifier.events.on('trainedWithDocument', (obj) => {
    console.log('Processing: ' + obj.index + '/' + obj.total);
});

classifier.train();

classifier.save('./datasets/classifier.json', (err) => {
    if (err)
        console.error(err);
    else
        console.log('\nDone!\nClassifier Saved');
});
