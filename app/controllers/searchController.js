var app = angular.module('myApp');
app.controller('searchController', function ($scope, booksService) {
  // console.log($scope.searchQuery);

  booksService.searchBooks().then(function (res) {
    $scope.searchedBooks = res;
    // console.log($scope.searchedBooks);
  });
  $scope.onBookSelect = function (book) {
    booksService.onSelectBook(book);
  };
});
