'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/recommendedBooks.html',
      controller: 'recommendedBooksController',
    })
    .when('/details/:bookId', {
      templateUrl: './views/bookDetails.html',
      controller: 'bookDetailsController',
    })
    .when('/search/:searchQuery', {
      templateUrl: './views/searchBooks.html',
      controller: 'searchController',
    })
    .otherwise({
      redirectTo: '/',
    });
});

