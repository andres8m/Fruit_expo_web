// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home/home.html',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/roles', {
            templateUrl : 'pages/about/about.html',
            controller  : 'aboutController'
        })

        // route for the registers page
        .when('/registers', {
            templateUrl : 'pages/registers/contact.html',
            controller  : 'contactController'
        })

        .when('/config', {
            templateUrl : 'pages/registers.html',
            controller  : 'contactController'
        });
});


scotchApp.controller('NavCtrl',
    ['$scope', '$location', function ($scope, $location) {
        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'active' : '';
        };

        $scope.loadHome = function () {
            $location.url('/');
        };

        $scope.loadAbout = function () {
            $location.url('/roles');
        };

        $scope.loadContact = function () {
            $location.url('/registers');
        };

    }]);




// create the controller and inject Angular's $scope

// scotchApp.controller('mainController', function($scope) {
//     // create a message to display in our view
//     $scope.message = 'Everyone come and see how good I look!';
//
//
// });


// scotchApp.controller('aboutController', function($scope) {
//     $scope.message = 'Look! I am an about page.';
// });
//
// scotchApp.controller('contactController', function($scope) {
//     $scope.message = 'Contact us! JK. This is just a demo.';
// });
