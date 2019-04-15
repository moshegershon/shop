mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: String,
    name: String,
});
module.exports = mongoose.model('Product', ProductSchema); 