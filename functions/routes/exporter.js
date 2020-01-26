const functions = require('firebase-functions')
const collection = require('firebase-admin').firestore().collection('playlists')

exports.handler = async (req, res) => {
    if(Array.isArray(req.body)){
        //POST playlists
        try{
            await Promise.all( Array.from(req.body.entries()).map( async ([index, playlist]) => {
                //For each playlist
                if(!playlist.name || !Array.isArray(playlist.songs)) 
                    throw Error(`${index} does not have a name or songs`)
                else {
                    //Create playlist doc
                    let doc = collection.doc(playlist.name.toString())
                    await doc.set({})
                    await Promise.all( playlist.songs.map( async song => {
                        //For each song
                        await doc.collection('songs').doc(song.id.toString()).set(song)    
                    }))    
                }
            }))
            console.log('ok')
            res.end('ok')
            return
        }
        catch(e){
            console.log(`${e.message}`)
            res.end({e})
            return
        }
    }
    else{
        res.setHeader('content-type', 'text/html')
        res.end(`
            <input id="input" type="file"></input>
            <p id="p"></p>
            <script>
                const p = document.getElementById("p")
                const input = document.getElementById("input")
                input.addEventListener("change", async () => {
                    var responce = await fetch("", { 
                        method: "POST",
                        body:input.files[0] 
                    })
                    p.innerText = await responce.text()
                })
            </script>
        `)
        return
    }
}