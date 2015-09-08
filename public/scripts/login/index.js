app.controller('loginCtrl', ['$scope', '$location', 'authService', function($scope, $location, authService){
	
	$scope.user = {
		username: 'jason@walterbrimleykitty.com',
		password: 'Celie123' 
	}
	
	authService.logOut()
	
	$scope.login = function() {
		authService.login($scope.user).then(function(data){
			$location.path('/');
		});	
	};
}]);