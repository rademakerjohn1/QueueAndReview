const router = require("express").Router();
const TheAudioDbController = require("../../controllers/TheAudioDbController");
const albumController = require("../../controllers/albumController");

// TheAudioDB routes
router.route("/artist").get(TheAudioDbController.findByArtist);

router.route("/tracks").get(TheAudioDbController.findTracks);


// Database routes
router.route("/albums").post(albumController.create).get(albumController.findAll);

router.route("/albums/unlistened").get(albumController.findUnlistened);

router.route("/albums/listened").get(albumController.findListened);

router.route("/albums/:id").put(albumController.update).get(albumController.findById).delete(albumController.remove);

module.exports = router;
