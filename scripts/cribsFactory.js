angular
  .module('cribsApp')
  .factory('cribsFactory', function($http) {

    function getCribs() {
      return $http.get('data/cribs.json');
    }

    return {
      getCribs: getCribs
    }

  });