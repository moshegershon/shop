mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    token: String,
    password: {
        type: String
    }
});
module.exports = mongoose.model('users', UserSchema);