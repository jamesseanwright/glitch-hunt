(function () {
    'use strict';

    G.AutoMoveable = function AutoMoveable(speed, direction) {
        this.speed = speed;
        this.direction = direction;

        G.autoMoveSystem.register(this);
    };

    G.AutoMoveable.direction = {
        LEFT: -1,
        RIGHT: 1
    }
}())
