const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9_]+$/.test(value),
            message: 'Username can only contain alphanumeric characters and underscores',
        },
    },
    password: String, // Assuming no specific validation for the password
});

accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", accountSchema);
