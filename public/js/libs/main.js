angular.module("NetFlixApp",['ngRoute'])
.config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'NetFlixController'
        });

        $routeProvider.when('/films', {
            templateUrl: 'partials/films.html',
            controller: 'FilmsController'
        });

        $routeProvider.otherwise({redirectTo: '/home'});
    });
