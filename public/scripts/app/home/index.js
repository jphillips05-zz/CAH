app.controller('homeCtrl', ['$scope', 'test', function($scope, test){
	console.log('home');
	
	test.needAuth().then(function(data){
		console.log(data);
	});
	
}]);