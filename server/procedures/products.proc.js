db = require('../config/db');

exports.allProducts = function() {
    return db.rows('GetAllProducts', []);
}

exports.allApparel = function() {
    return db.rows('GetProApp', []);
}

exports.allMisc = function() {
    return db.rows('GetProMisc', []);
}

exports.singleProduct = function(id) {
    console.log('Single Procedure: ' + id)
    return db.row('GetSingleProduct', [id]);
}