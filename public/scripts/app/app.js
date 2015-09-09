var app = angular.module('cah', [
	'ngRoute',
	'LocalStorageModule'
])

.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
}])

.run(['authService', function (authService) {
	authService.fillAuthData();
}]);