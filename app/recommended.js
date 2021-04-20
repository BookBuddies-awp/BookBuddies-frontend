
var app = angular.module('myApp', []);
app.controller('mycontroller', async function($scope, $http) {
    const headers={"Authorization":"x0G4Q1Rceqa907jhTmrD"};
 await $http.get("https://bookbuddies-api.herokuapp.com/api/bestsellers",{headers})
  .then(function(response) {
      data=response.json();
      console.log("elo"+data);
    $scope.myWelcome = data[0].title;
  });
});








