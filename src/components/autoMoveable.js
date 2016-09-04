(function () {
    'use strict';

    G.autoMoveable = function autoMoveable(entity, speed, direction) {
        entity.speed = speed;
        entity.direction = direction;

        G.autoMoveSystem.register(entity);
    };

    G.autoMoveable.direction = {
        LEFT: -1,
        RIGHT: 1
    }
}())
