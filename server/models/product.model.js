mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: String,
    name: String,
    price: String,
    pic: String 
});
module.exports = mongoose.model('Product', ProductSchema); 