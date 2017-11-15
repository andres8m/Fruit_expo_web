angular.module('scotchApp')
    .controller('salesController', function ($scope,$rootScope,$http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $rootScope.allow = true;

        // $http.get("http://localhost:8080/api/registers/sales")
        //     .then(function (response) {
        //         $scope.allSales=response.data.data;
        //
        //     }, function (error) {
        //         // console.log("Error");
        //
        //     });

        $scope.allSales = [{
            name:"n.oeandres8m@gmail.com",
            id: 1,
            date: 1510759230739,
            total: "250 Q.",
            saldo: "35 Q."
        },{
                name:"n.oeandres8m@gmail.com",
                id: 2,
                date: 1510759230739,
                total: "250 Q.",
                saldo: "25 Q."

            }];


    });