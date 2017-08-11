var express = require('express');
var procedures = require('../procedures/misc.proc');

var  router = express.Router() 

//  -> /api/misc 

router.get('/', function(req, res) {
    return procedures.allMisc() 
        .then(function(misc) {
            console.log('Fetched Misc.');
            res.send(misc);
        }, function(err) {
            console.log('Error fetching misc: ' + err.message);
        })
})

module.exports = router;