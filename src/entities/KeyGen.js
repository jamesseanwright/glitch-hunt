(function () {
    'use strict';

    function KeyGen() {
        
    }

    KeyGen.prototype.init = function init() {
        G.Generating.call(this, 'key');
    };

    G.Key = Key;
}());