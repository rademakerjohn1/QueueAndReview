const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user')
const bcrypt = require('bcryptjs');


module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
            User.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        return done(null, false,{ message: "Email not found"} )
                    }
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, {message: "Incorrect password"})
                        }
                    })
                })
        } )
    )
    
    passport.serializeUser((user,done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id,function(err,user) {
            done(err, user)
        })
    })
    

}