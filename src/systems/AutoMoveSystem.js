(function () {
    'use strict';

    function AutoMoveSystem() {

    }

    AutoMoveSystem.prototype = G.system.create(function next(entity) {
        var speed = entity.speed instanceof Function ? entity.speed() : entity.speed;

        entity.x += speed * entity.direction;

        if (AutoMoveSystem.hasLeftScreen(entity)) {
            entity.onLeftScreen && entity.onLeftScreen();
            G.entityPool.reset(entity);
        }
    });

    AutoMoveSystem.hasLeftScreen = function hasLeftScreen(entity) {
        if (entity.direction === G.autoMoveable.direction.LEFT) {
            return entity.x + entity.width < entity.leftBoundary;
        }

        return entity.x > entity.rightBoundary;
    };

    G.AutoMoveSystem = AutoMoveSystem;
}());