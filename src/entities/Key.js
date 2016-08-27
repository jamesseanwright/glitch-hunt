(function () {
    'use strict';

    function Key() {
        
    }

    Key.prototype.init = function init(x, y, width, height, keyName, speed) {
        G.Positionable.call(this, x, y, width, height);
        G.ImageRenderable.call(this, G.images[keyName + 'Key']);
        /* TODO: this pattern is causing property name collisions
         * with Closure Compiler. Find another way. */
        
        //G.AutoMoveable.call(this, speed, G.AutoMoveable.direction.LEFT);
    };

    G.Key = Key;
}());