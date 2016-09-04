(function () {
    'use strict';

    function KeyGen() {

    }

    KeyGen.prototype.init = function init(keyX, keyY, keyWidth, keyHeight) {
        G.generating(this, 'key');
        G.positionable(this, keyX, keyY, keyWidth, keyHeight);
    };

    G.KeyGen = KeyGen;
}());