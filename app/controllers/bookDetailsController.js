var app = angular.module('myApp');

app.controller('bookDetailsController', function ($scope, booksService) {
  $scope.book = booksService.getSelectedBook();
  if ($scope.book.ratings === undefined) {
    $scope.ratings = Array[0]
  }
  else {
    $scope.ratings = Array(Math.ceil($scope.book.ratings));
    for (let i = 0; i < (Math.ceil($scope.book.ratings)); i++) {
      $scope.ratings[i] = i;
    }
  }
  console.log($scope.book);
});
