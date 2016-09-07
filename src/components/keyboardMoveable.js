(function () {
    'use strict';

    G.keyboardMoveable = function capturing(entity, speed) {
        entity.speed = speed;

        G.keyboardMoveSystem.register(entity);
    };

    G.keyboardMoveable.direction = {
        LEFT: -1,
        RIGHT: 1
    };

    G.keyboardMoveable.keys = [
        { name: 'ArrowLeft', direction: G.keyboardMoveable.direction.LEFT },
        { name: 'ArrowRight', direction: G.keyboardMoveable.direction.RIGHT }
    ];
}());