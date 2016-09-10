(function () {
    'use strict';

    function KeyGen() {

    }

    KeyGen.prototype.init = function init(keyX, keyY) {
        G.generating(this, 'key');
        G.positionable(this, keyX, keyY);
    };

    G.KeyGen = KeyGen;
}());