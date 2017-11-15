angular.module('scotchApp')
    .controller('dischargeRecordController', function ($scope,$rootScope,$http,$location) {
        // create a message to display in our view
        $rootScope.allow = true;
        $scope.openModal=false;
        $scope.getBack = function () {
            $scope.openModal = false;
            $location.url('registers');
        };


        $scope.getDischarges = function () {

            $http.get("http://localhost:8080/api/inventory/discharges")
                .then(function (response) {
                    $scope.allDischarges = response.data.data;
                }, function (error) {
                    // console.log("Error");
                });
        };

        $scope.getDischarges();




    });