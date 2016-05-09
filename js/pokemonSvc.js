angular.module('pokemon')
.service('pokemonSvc', function($http, $q) {

  this.getLotsOfPokemon = function(count) {
    var dfd = $q.defer();

    var pokemonData = [];
   	  
	function checkForAllDataReceived() {
		if (pokemonData.length === count) {
			dfd.resolve({
				pokeData: pokemonData
			});
		}
	}

    for (var i = 1; i <= count; i++) {
      $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v1/pokemon/' + i
      }).then(function(response) {
        if(response.status === 200) {
          pokemonData.push(response.data);
        }
		checkForAllDataReceived(); 
      })
    }
	return dfd.promise;  
  };

  this.getPokemon = function(num) {
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v1/pokemon/'+num
    }).then(function(response) {
      return response.data;
    });

  };


});
