(function () {
    'use strict';

    G.scenes.boss = {
        start: function start() {
            var glitch = G.entityPool.getSingleton('glitch');
            var player = G.entityPool.getSingleton('player');

            glitch.init(0.8, 0.6, 0.20, 0.3556, 0.01);
            player.init();
        },

        end: function end() {

        }
    };
}());