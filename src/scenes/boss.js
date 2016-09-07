(function () {
    'use strict';

    G.scenes.boss = {
        start: function start() {
            var glitch = G.entityPool.getSingleton('glitch');
            // var player = G.entityPool.getSingleton('player');
            G['getScreenPos'] = { x: G.getScreenXPos, y: G.getScreenYPos }
            glitch.init(0.4, 0.6, 0.20, 0.3556, 0.01);
        },

        end: function end() {

        }
    };
}());