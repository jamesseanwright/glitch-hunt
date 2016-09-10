(function () {
    'use strict';

    G.scenes.hacking = {
        start: function start() {
            var screen = G.entityPool.getSingleton('screen');
            var captureZone = G.entityPool.getSingleton('captureZone');
            var keyGen = G.entityPool.getSingleton('keyGen');
            var hud = G.entityPool.getSingleton('hud');

            captureZone.init(G.gameState.captureZoneX, 0.07, 0.15, 0.85);
            keyGen.init(0.8, 0.4);
            screen.init(0, 0, 1, 1);
            hud.init();
        },

        end: function end() {
            G.entityPool.resetSingleton('screen');
            G.entityPool.resetSingleton('captureZone');
            G.entityPool.resetSingleton('keyGen');
            G.entityPool.resetSingleton('hud');
            G.entityPool.resetGroup('key');
        }
    };
}());