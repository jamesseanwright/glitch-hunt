(function () {
    'use strict';

    G.scenes.hacking = function hacking() {
        var screen = G.entityPool.getSingleton('screen');
        var captureZone = G.entityPool.getSingleton('captureZone');
        var keyGen = G.entityPool.getSingleton('keyGen');
        var hud = G.entityPool.getSingleton('hud');

        screen.init(0, 0, 1, 1);
        captureZone.init(G.gameState.captureZoneX, 0.07, 0.15, 0.85);
        keyGen.init(0.8, 0.4, 0.09, 0.09);
        hud.init(0, 0, 1, 0.08);
    };
}());