(function () {
    'use strict';

    function AutoMoveSystem(gameWidth) {
        this.gameWidth = gameWidth;
    }

    AutoMoveSystem.prototype = G.system.create(function next(entity) {
        entity.x += entity.speed * entity.direction;

        if (AutoMoveSystem.hasLeftScreen(entity)) {
            G.entityPool.reset(entity);
        }
    });

    AutoMoveSystem.hasLeftScreen = function hasLeftScreen(entity) {
        if (entity.direction === G.autoMoveable.direction.LEFT) {
            return entity.x + entity.width < 0;
        }

        return entity.x > this.gameWidth;
    }

    G.AutoMoveSystem = AutoMoveSystem;
}());