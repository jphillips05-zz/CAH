module.exports = function(config) {
    var http = require('http'),
        querystring = require("querystring");

    return {
        login: function(username, password, callback) {
            var options = {
                host: config.auth.server,
                port: config.auth.port,
                path: '/auth',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            var data = querystring.stringify({
                username: username,
                password: password
            });

            var httpreq = http.request(options, function(res) {
                res.setEncoding('utf8');
                res.on('data', function(chunk) {
                    callback(null, chunk);
                });
                res.on('end', function() {

                })
            });

            httpreq.write(data);
            httpreq.end();
        }
    };
};
