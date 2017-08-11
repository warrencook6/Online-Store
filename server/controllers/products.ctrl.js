var express = require('express');
var procedures = require('../procedures/products.proc');

var router = express.Router();

//  --> Auction API URI
//  --> /api/products

router.get('/', function(req, res) {
    return procedures.allProducts()
        .then(function(products) {
            console.log('Fetched Products');
            res.send(products);
        }, function(err) {
            console.log("Error retrieving products: " + err.message);
        })
})

router.get('/apparel', function(req, res) {
    return procedures.allApparel()
        .then(function(apparel) {
            console.log('Fetched Products listed as Apparel');
            res.send(apparel);
        }, function(err) {
            console.log("Error retrieving apparel: " + err.message);
        })
})

router.get('/misc', function(req, res) {
    return procedures.allMisc()
        .then(function(misc) {
            console.log('Fetched Products listed as Misc.');
            res.send(misc);
        }, function(err) {  
            console.log('Error retrieving misc.: ' + err.message);
        })
})

router.get('/:id', function(req, res) {
    return procedures.singleProduct(req.params.id)
        .then(function(product) {
            console.log('retrieve a product with an id of ' + req.params.id);
            console.log(product)
            res.send(product);
        }, function(err) {
            console.log('Error grabbing single product: ' + err.message);
        })
})





module.exports = router;