'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/recommendedBooks.html',
      controller: 'recommendedBooksController',
    })
    .when('/details', {
      templateUrl: './views/bookDetails.html',
      controller: 'bookDetailsController',
    }).when('/search', {
      templateUrl: './views/searchBooks.html',
      controller: 'searchController',

    })
    .otherwise({
      redirectTo: '/',
    });
});

// app.controller('recommendedBooksController', function ($scope, $http) {
//   $http({
//     method: 'GET',
//     url: 'https://bookbuddies-api.herokuapp.com/api/bestsellers',
//     headers: { Authorization: 'x0G4Q1Rceqa907jhTmrD' },
//   }).then(function (response) {
//     $scope.books = response.data;
//     console.log($scope.books);
//   });
// });
