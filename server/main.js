const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Product = require('./models/product.model')
const User = require('./models/user.model')
const {auth} = require('./controllers/authController');
const jwt = require('jsonwebtoken');

/* conection */

var db = 'mongodb://127.0.0.1/product';
mongoose.connect(db, {useNewUrlParser: true});
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));

console.log("connection created");
con.once('open', function () {
    console.log("connected to db");
});

/* end conection */

/* config  */
const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 6789;
/* end config */




app.all('/api*', (req, res, next) => {
    let tk = req.headers.authorization;
    jwt.verify(tk, 'privateKey', function (err, decoded) {
        // err
        if (err) {
            return res.send({message: "unauthorized"});
        }
        req.params.id = decoded.id;
        next();
        // decoded undefined
    });
});





app.get('/product', function (req, res) {
    console.log('getting all products');
    Product.find({})
        .exec(function (err, products) {
            if (err) {
                res.send(404, 'Error has occurred!')
            } else {
                // console.log(products);
                res.json(products);
            }
        });
});
app.delete('/api/product/:id', (req, res) => {
    console.log('req delete', req);
    Product.remove({_id: req.params.id})
        .exec(function (err, Product) {
            if (err) {
                res.send(404, 'Error has occurred!')
            } else {
                // console.log(Product);
                // console.log(res);
                res.json({message: 'removed successfully'});
                // console.log(res);
            }
        });
});
/* end controllers */
/*
temp
*/

app.post('/api/nproduct', function (req, res) {
    var newProduct = new Product;
    newProduct.category = req.body.category;
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.pic = req.body.pic;
    newProduct.save(function (err, Product) {
        if (err) {
            console.log(err);
            res.send('Error saving product!')
        } else {
            res.json(Product);
            console.log("product:",Product);
        }
    })
});
app.get('/api/product/:id', function getSingleProduct(req, res) {
    const id = req.params.id;
    console.log(id);
});

app.post('/login', function (req, res) {
    var newUser = new User;
    newUser.password = req.body.password;
    newUser.email = req.body.email;
    newUser.name = req.body.name;
    User.findOne({email: newUser.email}, (err, userInfo) => {
        if (err) {
            return res.send('Error getting user!')
        }
        auth.compare(newUser.password, userInfo.password, (err, hash) => {
            if (err) {
                return res.send({message: 'invalid passord or email'}).status(400);
            }
            jwt.sign(userInfo.toJSON(), 'privateKey', {expiresIn: 3600}, function (err, token) {
                console.log(token);
                console.log('password matched');
                userInfo.token = token;
                userInfo.password = undefined;
                res.json(userInfo);
            });
        })

    });
});

app.post('/nuser', function (req, res) {
    var newUser = new User;
    newUser.password = req.body.password;
    newUser.email = req.body.email;
    newUser.name = req.body.name;

    auth.hashPassword(newUser.password, (err, hash) => {
        if (err) {
            return res.send(err);
        }
        newUser.password = hash;
        newUser.save(function (err, Product) {
            if (err) {
                res.send('Error saving product!')
            } else {
                newUser.password = undefined;
                res.json(newUser);
                console.log(newUser);
            }
        })
    })
});

// app.get('/api/allusers', function (req, res) {
//     console.log('getting all users');
//     User.find({})
//         .exec(function (err, user) {
//             if (err) {
//                 res.send(404, 'Error has occurred!')
//             } else {
//                 // console.log(products);
//                 res.json(user);
//             }
//         });
// });

app.listen(PORT, () => {
    console.log('Listening on ', PORT);

});