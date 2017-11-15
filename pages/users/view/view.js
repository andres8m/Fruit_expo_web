angular.module('scotchApp')
    .controller('userViewController', function ($scope,$rootScope,$http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $rootScope.allow = true;

        $http.get("http://localhost:8080/api/user/all")
            .then(function (response) {
                $scope.allEmployees=response.data.data;

            }, function (error) {
                // console.log("Error");

            });


    });