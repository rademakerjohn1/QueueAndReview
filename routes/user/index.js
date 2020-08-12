const router = require("express").Router();
const userController = require("../../controllers/userController");


// TheAudioDB routes
router.route("/register").post(userController.registerUser)

router.route("/login").post(userController.loginUser)

router.get("/checkAuthentication", (req, res) => {
    if (!req.user) {
        res.send(false)
    } else (res.send(true))
});


module.exports = router;
