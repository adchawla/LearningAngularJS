'use strict';

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller(
    'BlogCtrl',
    ['$scope', function BlogCtrl($scope){
        $scope.blogArticle =
            'This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post';
    }]
);