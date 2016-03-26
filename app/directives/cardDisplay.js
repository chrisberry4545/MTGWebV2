(function () {
    'use strict';

    angular.module('mtgApp').directive('cardDisplay', ['downloadDataService', function (downloadDataService) {
        return {
            scope: {
                title: '@',
                cards: '=',
                cardClick: '&',
                landCards: '=',
                landCardClick: '&',
                instructions: '@',
                clearFunction: '&',
                showSave: '@',
                allowTestHands: '@'
            },
            link: function($scope, elem, attrs) {
              $scope.showClear = function() {
                return angular.isDefined(attrs.clearFunction);
              };
              $scope.saveSelection = function() {
                downloadDataService.saveCardsList($scope.cards.concat($scope.landCards), $scope.title);
                // trackEvent(controllerId, 'save-selected-cards');
              };
              $scope.reverseCard = function(card) {
                if (!card.isReversed) {
                  card.isReversed = true;
                } else {
                  card.isReversed = false;
                }
                // $scope.$apply();
              }
            },
            restrict: 'AE',
            templateUrl: '/app/directives/cardDisplay.html'
        };
    }]);

})();
