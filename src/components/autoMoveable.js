(function () {
    'use strict';

    G.autoMoveable = function autoMoveable(entity, speed, direction, leftBoundary, rightBoundary) {
        entity.speed = speed;
        entity.direction = direction;
        entity.leftBoundary = leftBoundary || 0;
        entity.rightBoundary = rightBoundary || G.constants.WORLD_WIDTH;

        G.autoMoveSystem.register(entity);
    };

    G.autoMoveable.deregister = function deregister(entity) {
        G.autoMoveSystem.deregister(entity);
    };

    G.autoMoveable.direction = {
        LEFT: -1,
        RIGHT: 1
    }
}());
