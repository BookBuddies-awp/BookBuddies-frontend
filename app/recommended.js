
var app = angular.module('myApp', []);
app.controller('mycontroller', async function ($scope, $http) {
  await $http({
    method: 'GET',
    url: 'https://bookbuddies-api.herokuapp.com/api/bestsellers',
    headers: { "Authorization": "x0G4Q1Rceqa907jhTmrD" }
  }).then(function (response) {
    $scope.books = response.data;
    console.log($scope.books)
  });


});







