(function () {
    'use strict';

    var supportedKeys = [

    ]

    function Key() {
        
    }

    Key.prototype.init = function init(x, y, width, height, speed) {
        var key = Key.getRandom();

        G.Positionable.call(this, x, y, width, height);
        G.ImageRenderable.call(this, G.images[key + 'Key']);
        G.AutoMoveable.call(this, speed, G.AutoMoveable.direction.LEFT);
        G.Capturable.call(this, key);
    };

    Key.getRandom = function getRandom() {
        var index = Math.floor(Math.random() * G.keyboard.supportedKeys.length);
        return G.keyboard.supportedKeys[index];
    }

    G.Key = Key;
}());