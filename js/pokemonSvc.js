angular.module('pokemon')
.service('pokemonSvc', function($http) {

  this.getPokemon = function(num) {
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v1/pokemon/'+num
    }).then(function(response) {
      return response.data;
    });

  };


});
