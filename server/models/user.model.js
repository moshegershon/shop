mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    password: String 
});
module.exports = mongoose.model('user', UserSchema);