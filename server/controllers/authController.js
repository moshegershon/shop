const bcrypt = require('bcrypt');

const AuthController = {}

AuthController.hashPassword = function (passwordToHash, callback) {
    bcrypt.hash(passwordToHash, 10, function (err, hash) {
        return callback(err, hash);
    });
}

AuthController.compare = function (password, hash, callback) {
    bcrypt.compare(password, hash, function (err, res) {
        return callback(err, res);
    });
}

module.exports.auth = AuthController;

