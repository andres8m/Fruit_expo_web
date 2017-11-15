angular.module('scotchApp')
    .controller('aboutController', function ($scope,$rootScope,$http,$location) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $rootScope.allow = true;


        $scope.loadViewUsers = function () {
            $location.url('view');
        };


    });