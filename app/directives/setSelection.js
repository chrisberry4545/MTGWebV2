(function () {
    'use strict';

    angular.module('mtgApp').directive('setSelection', ['$mdSidenav', function ($mdSidenav) {

        return {
            scope: {
                setGroups: '=',
                additionalDropdownOptions: '=',
                additionalButtonText: '@',
                additionalButtonFunction: '&'
            },
            restrict: 'AE',
            templateUrl: '/app/directives/setSelection.html',
            transclude: true,
            controller: function ($scope, $element) {

                $scope.displayExtraOptions = function () {
                    $mdSidenav('options').toggle();
                }

                $scope.additionButtonFunctionClicked = function() {
                  $scope.displayExtraOptions();
                  $scope.additionalButtonFunction();
                }
            }
        }

    }]);


})();
