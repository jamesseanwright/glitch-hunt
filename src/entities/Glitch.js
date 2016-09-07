(function () {
    'use strict';

    function Glitch() {

    }

    Glitch.prototype.init = function init(x, y, width, height, speed) {
        G.positionable(this, x, y, width, height);
        G.imageRenderable(this, G.images.glitch);
        G.autoMoveable(this, speed, G.autoMoveable.direction.LEFT);
        G.bounceable(this);
    };

    G.Glitch = Glitch;
}());