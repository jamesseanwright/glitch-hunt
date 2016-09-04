(function () {
    'use strict';

    G.Capturable = function Capturable(key) {
        this.key = key;

        G.captureSystem.register(this);
    };
}());