(function () {
    'use strict';

    function Key() {
        
    }

    Key.prototype.init = function init(x, y, width, height, key, speed) {
        G.Positionable.call(this, x, y, width, height);
        G.ImageRenderable.call(this, G.images[key + 'Key']);
        G.AutoMoveable.call(this, speed, G.AutoMoveable.direction.LEFT);
        G.Capturable.call(this, key);
    };

    G.Key = Key;
}());