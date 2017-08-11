var express = require('express'); 
var procedures = require('../procedures/purchasesdb.proc');

var router = express.Router(); 

//  --> api/purchasesdb

router.post('/', function(req, res) {
    return procedures.write(req.body.product_id, req.body.price, req.body.stripetransactionid)
        .then(function(success) {
            console.log("Added purchase to db");
            res.send(success);
        }, function(err){
            console.log("Error adding purchase to db: " + err.message);
            res.sendStatus(500);
        })
}) 

module.exports = router;