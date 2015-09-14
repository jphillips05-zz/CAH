module.exports = function(app, config) {
    var auth = require('./auth')(config);
    var user = require('./user');

    app.post('/api/Login', function(req, res) {

        auth.login(req.body.username, req.body.password, function(err, data) {
            if (err) {
                res.json({
                    success: false,
                    msg: "An error has occured"
                })
            }

            if (data && JSON.parse(data).token) {
                user.verify(JSON.parse(data).token, function(err, data) {
                    if (err) {
                        res.json({
                            success: false
                        });
                    } else {
                        res.json({
                            success: true,
                            token: JSON.parse(data).token
                        });
                    }
                });
            }
        });
    });

    app.get('/api/test', function(req, res) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
            user.verify(token, function(err, data){
                console.log(data);
            });
        }
    });
};
