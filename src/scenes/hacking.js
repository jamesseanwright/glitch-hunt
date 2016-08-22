(function () {
    'use strict';

    G.scenes.hacking = function hacking() {
        var screen = G.entityPool.getSingleton('screen');
        var captureZone = G.entityPool.getSingleton('captureZone');
        
        screen.init(0, 0, 1, 1);
        captureZone.init(0.1, 0.05, 0.1, 0.78);
    };
}());