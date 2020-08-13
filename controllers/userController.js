const db = require("../models");
const passport = require('passport')
require("../config/passport")

module.exports = {

    async registerUser(req, res) {
        const { name, email, password } = req.body
        const emailExists = await db.User.findOne({ email: email })
        if (emailExists) {
            res.redirect("/register")
        } else {
            await db.User.create({name, email, password})
            res.redirect("/login")
        }
    },

    loginUser: function(req, res, next) {
        passport.authenticate("local", {
            successRedirect: '/library',
            failureRedirect: '/login'
        })(req, res, next)
    },

    logoutUser: function(req, res) {
        req.logout()
        res.redirect('/')
    }


};
