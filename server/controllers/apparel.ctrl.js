var express = require('express'); 
var procedures = require('../procedures/apparel.proc'); 

var router = express.Router(); 

//  --> /api/apparel 

router.get('/', function(req, res) {
    return procedures.allApparel().then(function(apparel) {
            console.log('Fetched Apparel');
            res.send(apparel);
        }, function(err) {
            console.log('Unable to fetch apparel: ' + err.message);
            res.sendStatus();
        })
})

module.exports = router;