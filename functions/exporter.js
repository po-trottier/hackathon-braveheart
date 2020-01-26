const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fs = require('fs');
const serviceAccount = require('./braveheart-265cb-firebase-adminsdk-510ee-f0ea13f66c.json');

//const file = JSON.parse(fs.readFileSync("../../Desktop/ConUHacks V/project-braveheart/functions/playlist_2_0.json", 'utf-8'));
const file = require("../../Desktop/ConUHacks V/project-braveheart/functions/playlist_2_0.json");

// JSON To Firestore
const jsonToFirestore = async () => {
    try {
        console.log('Initialzing Firebase');
       await admin.initializeApp({
               credential: admin.credential.cert(serviceAccount),
               databaseURL: "https://braveheart-265cb.firebaseio.com/"
           });
        console.log('Firebase Initialized');

        const db = admin.firestore();
        //console.log(file[0]);
        console.log(db.collection("playlists"));
        file.forEach(async (playlist) => {
            await db.collection("playlists").doc(playlist.name).set();
            playlist.songs.forEach(async (song) => {
               await db.collection("playlists").doc(playlist.name).collection("songs").doc(song.id).set(song);
            });
        });

    }
    catch (error) {
        console.log(error);
    }
};

jsonToFirestore();