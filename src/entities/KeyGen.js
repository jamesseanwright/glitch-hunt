(function () {
    'use strict';

    function KeyGen() {
        
    }

    KeyGen.prototype.init = function init(keyX, keyY, keyWidth, keyHeight) {
        G.Generating.call(this, 'key');
        G.Positionable.call(this, keyX, keyY, keyWidth, keyHeight);
    };

    G.KeyGen = KeyGen;
}());