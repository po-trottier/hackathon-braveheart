const functions = require('firebase-functions')
const collection = require('firebase-admin').firestore().collection('playlists')

const json = require('../playlist_2_0.json')

json.forEach( async playlist => {
    let doc = collection.doc(playlist.name)
    await doc.set({})
    await Promise.all(playlist.songs.map( song => doc.collection('songs').doc(song.id.toString()).set(song).catch(e => console.log(e.message))))
})

exports.handler = (req, res) => res.end('oK')