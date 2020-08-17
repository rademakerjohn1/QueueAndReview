const db = require("../models");
const passport = require('passport')
require("../config/passport")

module.exports = {

    async registerUser(req, res) {

        const { name, email, password } = req.body

        const emailExists = await db.User.findOne({ email: email })
        
        if (emailExists) {
            res.json({errors: "An account with this email exists"})
        } 
        else {
            try {
                const user =  await db.User.create({name, email, password})
                res.json(user)
            } 
            catch (err) {
                if (err.name === 'ValidationError') {
                    console.log(Object.values(err.errors).map(val => val.message))
                    const error = Object.values(err.errors).map(val => val.message)
                    res.json({errors: error});
                    }
            }
        }
    },

    loginUser: function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) {
              return next(err);
            }
            if (! user) {
              return res.json({ success : false, message : 'authentication failed' });
            }
            req.login(user, loginErr => {
              if (loginErr) {
                return next(loginErr);
              }
              return res.json({ success : true, message : 'authentication succeeded' });
            });      
        })(req, res, next);
    },

    logoutUser: function(req, res) {
        req.logout()
        res.redirect('/')
    }


};
