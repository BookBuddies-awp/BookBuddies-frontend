var app = angular.module('myApp');
app.controller('searchController', function ($scope, booksService) {
  // console.log($scope.searchQuery);

  booksService.searchBooks().then(function (res) {
    $scope.searchedBooks = res;
    // $scope.searchedBooks = booksService.getSearchedBooks();
    console.log($scope.searchedBooks);
  });
});
