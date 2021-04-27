var app = angular.module('myApp');
app.controller('searchbarController', function ($scope, booksService) {
  $scope.searchQuery;

  $scope.searchBooks = function () {
    booksService.setSearchQuery($scope.searchQuery);
  };
});
