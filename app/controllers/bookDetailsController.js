var app = angular.module('myApp');

app.controller('bookDetailsController', function ($scope, booksService) {
  $scope.book = booksService.getSelectedBook();
  console.log($scope.book);
});
