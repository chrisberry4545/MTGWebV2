(function () {
    'use strict';

    angular.module('mtgApp').directive('cardDisplay', function () {
        return {
            scope: {
                title: '@',
                cards: '=',
                cardClick: '&',
                landCards: '=',
                landCardClick: '&',
                instructions: '@'
            },
            restrict: 'AE',
            templateUrl: '/app/directives/cardDisplay.html'
        };
    });

})();
