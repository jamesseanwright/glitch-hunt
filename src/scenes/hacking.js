(function () {
    'use strict';

    G.scenes.hacking = function hacking() {
        var screen = G.entityPool.getSingleton('screen');
        var captureZone = G.entityPool.getSingleton('captureZone');
        var key = G.entityPool.get('key');
        
        screen.init(0, 0, 1, 1);
        captureZone.init(0.1, 0.05, 0.15, 0.78);
        key.init(0.8, 0.4, 0.09, 0.07, 'a', 0.004);
    };
}());