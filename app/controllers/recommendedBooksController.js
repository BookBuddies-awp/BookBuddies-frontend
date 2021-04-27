var app = angular.module('myApp');
app.controller('recommendedBooksController', function ($scope, booksService) {
  booksService.getBooksList().then(function (res) {
    $scope.books = res;
  });

  $scope.onBookSelect = function (book) {
    booksService.onSelectBook(book);
  };
});
