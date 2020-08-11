const axios = require('axios');


module.exports = {
    
    findByArtist: function(req, res) {
        const { query: params } = req;
        console.log(params.q);
        const apiKey = '5d656564694f534d656564';
        axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?${params.q}`)
        .then(results => res.json(results.data));
    },

    findByAlbum: function(req, res) {
        axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?a=${req.body}`)
        .then(console.log(res));
    },

    findByArtistAndAlbum: function(req, res) {
        axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/searchalbum.php?s=${req.body.artist}&a=${req.body.findByArtistAndAlbum}`)
        .then(console.log(res));
    },

    findTracks: function(req, res) {
        const { query: params } = req;
        console.log(params.q);
        const apiKey = '5d656564694f534d656564';
        axios.get(`https://www.theaudiodb.com/api/v1/json/${apiKey}/track.php?${params.q}`)
        .then(results => res.json(results.data));
    }
}