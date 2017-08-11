var db = require('../config/db');

exports.allApparel = function() {
    return db.rows('GetProApp', []);
}