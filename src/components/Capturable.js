(function () {
    'use strict';

    G.Capturable = function Capturable(key, onCapture) {
        this.key = key;
        this.onCapture = onCapture;

        G.captureSystem.register(this);
    };
}());