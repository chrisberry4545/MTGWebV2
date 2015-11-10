(function() {
  'use strict';

  angular.module('mtgApp').factory('logger', ['$mdToast', function($mdToast) {

    var loggerPosition = {
      bottom: true,
      top: false,
      left: false,
      right: true
    };

    function generalLog(msg, color) {
      $mdToast.show(
        $mdToast.simple()
          .content(msg)
          .position(loggerPosition)
          .hideDelay(3000)
      );
    }

    function logError(msg) {
      generalLog(msg);
    }

    function logSuccess(msg) {
      generalLog(msg);
    }

    function logStandard(msg) {
      generalLog(msg);
    }

    return {
      logError: logError,
      logSuccess: logSuccess,
      logStandard: logStandard
    };

  }]);

})();
