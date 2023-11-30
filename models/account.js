const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be at least 5 characters'],
        maxlength: [25, 'Username cannot exceed 25 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [10, 'Password must be at least 10 characters']
    }
});

accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", accountSchema);
