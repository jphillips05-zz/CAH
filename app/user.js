module.exports = function(config) {
    var jwt = require('jsonwebtoken');

    return {
        verify: function(token, callback) {
            if (token) {
                jwt.verify(token, config.jwtSecret, function(err, decoded){
                    if(err) {
                        callback("Could not verify");
                    } else {
                        callback({success: true});
                    }
                });
            } else {
                callback("No token");
            }
        }
    }

};
