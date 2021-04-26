var app = angular.module('myApp');
app.controller('searchbarController', function ($scope, booksService) {
  $scope.searchQuery;

  // console.log($scope.searchQuery);
  //   $scope.searchBooks = function () {
  //     booksService.searchBooks($scope.searchQuery).then(function (res) {
  //       console.log(res);
  //     });
  //   };

  $scope.searchBooks = function () {
    booksService.setSearchQuery($scope.searchQuery);
  };
});
