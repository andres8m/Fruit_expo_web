angular.module('scotchApp')
    .controller('addSaleController', function ($scope,$rootScope,$http,$location) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $rootScope.allow = true;
        $scope.discharge = {};
        $scope.discharge.total =0;
        $scope.discharge.productDischarges = [];
        $scope.objProduct = {};

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

        $scope.createSale = function () {
            $scope.openModal=true;
        }


    });