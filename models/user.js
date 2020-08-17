const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: [true, "Name required"]
    },
    email: { 
        type: String, 
        required: [true, "Email required"] 
    },
    password: { 
        type: String, 
        required: [true, "Password required"],
        minlength: [6, "Password must be at least six characters"]
     },
    date: { type: Date, default: Date.now },
    albums: [{ type: Schema.Types.ObjectId, ref: "Album"}]
})

userSchema.pre('save', function (next) {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
