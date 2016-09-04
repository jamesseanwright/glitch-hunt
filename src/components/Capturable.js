(function () {
    'use strict';

    G.Capturable = function Capturable(key) {
        this.key = key;
        this.isCaptured = false;

        G.captureSystem.register(this);
    };
}());