angular.module('projectApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/index.html'
        })
            .when('/home', {
                redirectTo: '/'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
