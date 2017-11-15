angular.module('scotchApp')
    .controller('dischargeController', function ($scope,$rootScope,$http,$location) {
        // create a message to display in our view
        $rootScope.allow = true;
        $scope.openModal=false;
        $scope.getBack = function () {
            $scope.openModal = false;
            $location.url('registers');
        };
        $scope.discharge = {};
        $scope.discharge.total =0;
        $scope.discharge.productDischarges = [];
        $scope.objProduct = {};
        $scope.showProductsList = [];


        $scope.addToProducts = function () {
            $scope.discharge.productDischarges.push($scope.objProduct);


                var x = $scope.objProduct.price * $scope.objProduct.quantity;
                // console.log(x);
                $scope.discharge.total =  $scope.discharge.total + x;
                // console.log($scope.discharge.total);


                $scope.objProduct = {};

                Materialize.toast('Agregado con exito!', 4000);
            // $scope.showProductsList.push($scope.objProduct);

        };


        $scope.getEmployees = function () {

            $http.get("http://localhost:8080/api/employee/all")
                .then(function (response) {
                    $scope.allEmployees=response.data.data;

                }, function (error) {
                    // console.log("Error");

                });

            $http.get("http://localhost:8080/api/inventory/products")
                .then(function (response) {
                    $scope.allProducts=response.data.data;

                }, function (error) {
                    // console.log("Error");

                });


        };

        $scope.getEmployees();


        $scope.createDischarge = function () {
            $http.post("http://localhost:8080/api/inventory/discharge", $scope.discharge)
                .then(function (response) {
                    $scope.openModal=true;

                }, function (error) {
                    // console.log("Error");

                });
        }



    });