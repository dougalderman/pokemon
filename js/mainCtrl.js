angular.module('pokemon')
.controller('mainCtrl', function($scope, pokemonSvc) {

  $scope.getThePokemon = function(num) {
      pokemonSvc.getPokemon(num).then(function(data) {
      $scope.pokemon = data;
      console.log(data);
    })
  };

});
