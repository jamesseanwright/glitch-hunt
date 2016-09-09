(function () {
    'use strict';

    G.scenes.boss = {
        start: function start() {
            var glitch = G.entityPool.getSingleton('glitch');
            var player = G.entityPool.getSingleton('player');

            G.entityPool.getSingleton('background');


            glitch.init();
            player.init();
        },

        end: function end() {
            G.entityPool.resetSingleton('background');
        }
    };
}());