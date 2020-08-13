const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/register").post(userController.registerUser)

router.route("/login").post(userController.loginUser)

router.get("/logout", (req,res) => {
    req.logout();
    if (!req.user) {
        res.send(false)
    }

})
router.get("/checkAuthentication", (req, res) => {
    console.log(req.user)
    if (!req.user) {
        res.send(false)
    } else (res.send(true))
});

module.exports = router;
