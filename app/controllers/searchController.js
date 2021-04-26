var app = angular.module('myApp');
app.controller('searchController', function ($scope, booksService) {
    $scope.searchQuery;

    console.log($scope.searchQuery);
    $scope.searchBooks = function () {
        $scope.books = booksService.searchBooks($scope.searchQuery);
    };
});