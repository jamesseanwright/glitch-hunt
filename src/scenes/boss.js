(function () {
    'use strict';

    G.scenes.boss = {
        start: function start() {
            var glitch = G.entityPool.getSingleton('glitch');
            var player = G.entityPool.getSingleton('player');
            var hud = G.entityPool.getSingleton('hud');

            G.entityPool.getSingleton('background');

            glitch.init();
            player.init();
            hud.init();
        },

        end: function end() {
            G.entityPool.resetSingleton('background');
            G.entityPool.resetSingleton('hud');
            G.entityPool.resetSingleton('player');
            G.entityPool.resetSingleton('glitch');
        }
    };
}());0, 0, 1, 0.08