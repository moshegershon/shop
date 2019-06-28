const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productCtrl = require('./endpoints/product');
const Product = require('./models/product.model')

/* conection */

var db = 'mongodb://127.0.0.1/product';
mongoose.connect(db, { useNewUrlParser: true });
var con = mongoose.connection;


con.on('error', console.error.bind(console, 'connection error:'));

console.log("connection created");
con.once('open', function () {
});

/* end conection */

/* config  */
const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 6789;
/* end config */


/* controllers */
// app.get('/product/:id', productCtrl.getSingleProduct);
// app.get('/product', productCtrl.getAllProducts);


app.get('/product', function (req, res) {
    console.log('getting all products');
    Product.find({})
        .exec(function (err, products) {
            if (err) {
                res.send(404, 'Error has occurred!')
            } else {
                console.log(products);
                res.json(products);
            }
        });
});
/* end controllers */
/*
temp
*/


app.post('/nproduct', function (req, res) {
    var newProduct = new Product;
    newProduct.category = req.body.category;
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.save(function (err, Product) {
        if (err) {
            console.log(err);
            res.send('Error saving product!')
        } else {
            res.json(Product);
            console.log(Product);
        }
    })
});
app.get('/product/:id', function getSingleProduct(req, res) {
    const id = req.params.id;
    console.log(id);
});

app.listen(PORT, () => {
    console.log('Listening on ', PORT);
});