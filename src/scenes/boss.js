(function () {
    'use strict';

    G.scenes.boss = {
        start: function start() {
            var glitch = G.entityPool.getSingleton('glitch');
            var player = G.entityPool.getSingleton('player');
        },

        end: function end() {

        }
    };
}());