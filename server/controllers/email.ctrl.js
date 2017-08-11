var express = require('express');
var emailSvc = require('../services/email.svc');
var router = express.Router();

router.post('/', function(req, res) {
    emailSvc.sendEmail(req.body.to, req.body.from, req.body.subject, req.body.content)
        .then(function() {
            console.log(res.statusCode);
            console.log(res.body);
            console.log(res.headers);
            res.sendStatus(204);
        }, function(err) {
            console.log(res.statusCode);
            console.log("Error from email controller: " + err.message);
            res.sendStatus(err.message);
        })
})

module.exports = router;