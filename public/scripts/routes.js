app.config(['$routeProvider', function($routeProvider){
	var cacheBustPrefix = Date.now();
	$routeProvider
		.when('/', {
			templateUrl: '/scripts/home/index.html?cache-bust=' + cacheBustPrefix,
			controller: 'homeCtrl',
			caseInsensitiveMatch: true
		})
		.when('/login', {
			templateUrl: '/scripts/login/index.html?cache-bust=' + cacheBustPrefix,
			controller: 'loginCtrl',
			caseInsensitiveMatch: true
		});
}]);