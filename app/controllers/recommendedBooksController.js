var app = angular.module('myApp');
app.controller('recommendedBooksController', function ($scope, booksService) {
  // $http({
  //   method: 'GET',
  //   url: 'https://bookbuddies-api.herokuapp.com/api/bestsellers',
  //   headers: { Authorization: 'x0G4Q1Rceqa907jhTmrD' },
  // }).then(function (response) {
  //   $scope.books = response.data;
  //   console.log($scope.books);
  // });
  booksService.getBooksList().then(function (res) {
    $scope.books = res;
  });

  $scope.onBookSelect = function (book) {
    booksService.onSelectBook(book);
  };
});
