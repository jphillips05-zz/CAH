app.factory('test', ['$http', '$q', function($http, $q) {
    return {
        needAuth: function() {
            var defer = $q.defer();

            $http({
                    method: 'GET',
                    url: 'api/test'
                })
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    defer.reject(data);
                });

            return defer.promise;
        }
    };
}]);
