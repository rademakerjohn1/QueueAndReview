const path = require("path");
const router = require("express").Router();
const theAudioDbController = require("../../controllers/theAudioDbController");
const albumController = require("../../controllers/albumController");


router.route("/artist").get(theAudioDbController.findByArtist);

router.route("/tracks").get(theAudioDbController.findTracks);

router.route("/albums").post(albumController.create).get(albumController.findAll);

router.route("/albums/unlistened").get(albumController.findUnlistened);

router.route("/albums/listened").get(albumController.findListened);

router.route("/albums/:id").put(albumController.update).get(albumController.findById)
.delete(albumController.remove);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;
