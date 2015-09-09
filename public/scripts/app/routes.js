app.config(['$routeProvider', function($routeProvider){
	var cacheBustPrefix = Date.now();
	$routeProvider
		.when('/', {
			templateUrl: '/scripts/app/home/index.html?cache-bust=' + cacheBustPrefix,
			controller: 'homeCtrl',
			caseInsensitiveMatch: true
		})
		.when('/login', {
			templateUrl: '/scripts/app/login/index.html?cache-bust=' + cacheBustPrefix,
			controller: 'loginCtrl',
			caseInsensitiveMatch: true
		});
}]);