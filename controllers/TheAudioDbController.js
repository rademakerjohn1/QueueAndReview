const axios = require('axios');


module.exports = {

    // Call TheAudioDB API and return  albums by specified artist
    findByArtist: function(req, res) {
        const apiKey = '5d656564694f534d656564';
        axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${req.query.q}`)
        .then(results => res.json(results.data));
    },  

    // Call TheAudioDB API and return songs corresponding with album id.
    findTracks: function(req, res) {
        const apiKey = '5d656564694f534d656564';
        axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/track.php?m=${req.query.q}`)
        .then(results => res.json(results.data));
    },
    
    // NEED TO ADD OPTION TO SEARCH BY ALBUM ON FRONT-END
    // Search TheAudioDB API for albums by album name
    findByAlbum: function(req, res) {
        axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?a=${req.body}`)
        .then(console.log(res));
    }

    // findByArtistAndAlbum: function(req, res) {
    //     axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${req.body.artist}&a=${req.body.findByArtistAndAlbum}`)
    //     .then(console.log(res));
    // }

}