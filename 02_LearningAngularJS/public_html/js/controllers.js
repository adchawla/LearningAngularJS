'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller(
    'MainCtrl',
    ['$scope', '$location', '$http', function MainCtrl($scope, $location, $http) {
        $scope.message = "Hello World!";
    }]
);

helloWorldControllers.controller(
    'ShowCtrl',
    ['$scope', '$location', '$http', function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show The World!";
    }]
);

helloWorldControllers.controller(
    'CustomerCtrl',
    ['$scope', function CustomerCtrl($scope) {
        // populate model
        $scope.customerName = "Bob's Burgers"; 
        $scope.customerNumber = "44522";
        
        // add behavior to the scope
        $scope.changeCustomer = function() {
            $scope.customerName = $scope.cName;
            $scope.customerNumber = $scope.cNumber;
        };
    }]
);

helloWorldControllers.controller(
    'AddCustomerCtrl',
    ['$scope', '$location', function AddCustomerCtrl($scope, $location) {
        $scope.submit = function() {
            $location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity);
        };
    }]
);

helloWorldControllers.controller(
    'AddedCustomerCtrl',
    ['$scope', '$routeParams', function AddedCustomerCtrl($scope, $routeParams) {
        // populate model
        $scope.customerName = $routeParams.customer; 
        $scope.customerCity = $routeParams.city;
    }]
);
