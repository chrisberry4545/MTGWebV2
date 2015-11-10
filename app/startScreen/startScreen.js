(function() {
  'use strict';

  angular.module('mtgApp').controller('startScreen', ['$scope', '$location', function($scope, $location) {

    $scope.test = 'test132';

    $scope.navigateToLocation = function(newLocation) {
      $location.path('/' +newLocation);
    }

  }]);

})();
