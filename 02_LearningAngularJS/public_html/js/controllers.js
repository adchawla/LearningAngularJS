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
        $scope.customerName = "Bob's Burgers"; 
        $scope.customerNumber = "44522"; 
    }]
); 
