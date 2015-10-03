angular
  .module('cribsApp')
  .filter('cribsFilter', function() {

    return function(listings, priceInfo) {

      var filtered = [];
      var min = priceInfo.min;
      var max = priceInfo.max;

      angular.forEach(listings, function(listing) {

        var price = parseInt(listing.price);

        if(price >= min && price <= max) {
          filtered.push(listing);
        }

      });

      return filtered;
    }

  });