module.exports = function(app, config) {
	var jwt = 	require('jsonwebtoken');
	var auth = 	require('./auth')(config);
	
	app.post('/api/v1/Login', function(req, res){

		auth.login(req.body.username, req.body.password, function(err, data){
			if(err) {
				res.json({success: false, msg: "An error has occured"})
			}
			
			console.log({
				success: true,
				token: JSON.parse(data).token
			});
			
			res.json({
				success: true,
				token: JSON.parse(data).token
			});
		});
	});
	
	app.get('/api/v1/test', function(req, res){
		var token = req.body.token || req.query.token || req.headers['x-access-token'];
		
		if(token) {
			jwt.verify(token, config.jwtSecret, function(err, decoded) {
				console.log(err, decoded);
			});
		}
		
		
	});
	
};