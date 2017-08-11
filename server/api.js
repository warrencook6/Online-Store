var express = require('express');
var products = require('./controllers/products.ctrl');
var misc = require('./controllers/misc.ctrl');
var apparel = require('./controllers/apparel.ctrl');
var purchasesdb = require('./controllers/purchasesdb.ctrl');
var purchases = require('./controllers/purchases.ctrl');
var email = require('./controllers/email.ctrl');

var router = express.Router();

router.use('/products', products);
router.use('/misc', misc);
router.use('/apparel', apparel);
router.use('/purchasesdb', purchasesdb);
router.use('/purchases', purchases);
router.use('/email', email);

module.exports = router;