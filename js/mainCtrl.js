angular.module('pokemon')
.controller('mainCtrl', function($scope, pokemonSvc) {

  $scope.getThePokemon = function(num) {
      pokemonSvc.getPokemon(num).then(function(data) {
      $scope.pokemon = data;
      console.log('data', data);
    });
  };
 
  $scope.getLotsOfPokemons = function(numOfPokemons) {
	  pokemonSvc.getLotsOfPokemon(numOfPokemons).then(function(data) {
    	$scope.allPokemon= data.pokeData;
		console.log('data', data)
	  });
  };

});
