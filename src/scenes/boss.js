(function () {
    'use strict';

    G.scenes.boss = {
        start: function start() {
            var glitch = G.entityPool.getSingleton('glitch');
            var player = G.entityPool.getSingleton('player');

            glitch.init(0.8, 0.775, 0.1, 0.1778, 0.008);
            player.init();
        },

        end: function end() {

        }
    };
}());