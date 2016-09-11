(function () {
    'use strict';

    var KEY_X = 0.85;
    var KEY_Y = 0.4;

    function KeyGen() {

    }

    KeyGen.prototype.init = function init() {
        G.generating(this, 'key');
        G.positionable(this, KEY_X, KEY_Y);
    };

    G.KeyGen = KeyGen;
}());