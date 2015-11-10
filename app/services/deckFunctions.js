﻿(function () {
    'use strict';

    var serviceId = 'deckFunctions';
    angular.module('mtgApp').factory(serviceId,
        ['common', deckFunctions]);


    function deckFunctions(common) {

        function shuffleDeck(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        function drawXCards(deckCards, numberOfCards) {
            return deckCards.slice(0, numberOfCards);
        }

        function getRemainingCards(deckCards, numberToStartFrom) {
            return deckCards.slice(numberToStartFrom, deckCards.length);
        }

        var service = {
            shuffleDeck: shuffleDeck,
            drawXCards: drawXCards,
            getRemainingCards: getRemainingCards
        };


        return service;
    }
})();
