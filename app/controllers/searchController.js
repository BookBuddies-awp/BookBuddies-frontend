var app = angular.module('myApp');
app.controller('searchController', function ($scope, booksService) {
    $scope.searchQuery = null;
    
    console.log($scope.searchQuery);
    searchBooks = function () {
        booksService.searchBooks($scope.searchQuery);
    };
});