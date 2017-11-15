angular.module('scotchApp')
    .controller('recordController', function ($scope,$rootScope,$http,$location) {
        // create a message to display in our view
        $rootScope.allow = true;
        $scope.openModal=false;
        $scope.getBack = function () {
            $scope.openModal = false;
            $location.url('registers');
        };







    });