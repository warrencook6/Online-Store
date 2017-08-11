db = require('../config/db'); 

exports.allMisc = function() {
    return db.rows('GetProMisc', []);
}