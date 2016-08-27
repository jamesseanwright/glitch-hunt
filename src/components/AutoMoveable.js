(function () {
    'use strict';

    G.AutoMoveable = function AutoMoveable(image) {
        this.image = image;

        G.autoMoveSystem.register(this);
    };
}())
