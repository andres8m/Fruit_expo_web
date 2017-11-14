angular.module('scotchApp')
    .controller('newLoadController', function ($scope,$rootScope,$http,$location) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $rootScope.allow = true;
        $scope.select={};
        // $scope.select = {
        //     value: "Option1",
        //     choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        // };

        $scope.getEmployees = function () {

            $http.get("http://localhost:8080/api/employee/all")
                .then(function (response) {
                    $scope.allEmployees=response.data.data;

                }, function (error) {
                    // console.log("Error");

                });


        };

        $scope.getEmployees();


    });