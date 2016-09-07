(function () {
    'use strict';

    G.scenes.boss = {
        start: function start() {
            var glitch = G.entityPool.getSingleton('glitch');
            var player = G.entityPool.getSingleton('player');

            G['getScreenPos'] = { x: G.getScreenXPos, y: G.getScreenYPos }
            glitch.init(0.8, 0.6, 0.20, 0.3556, 0.01);
            player.init(0.05, 0.755, 0.05, 0.2, 0.012);
        },

        end: function end() {

        }
    };
}());