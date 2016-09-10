(function () {
    'use strict';

    function AutoMoveSystem() {

    }

    AutoMoveSystem.prototype = G.system.create(function next(entity) {
        var speed = entity.speed instanceof Function ? entity.speed() : entity.speed;

        entity.x += speed * entity.direction;

        if (AutoMoveSystem.hasLeftScreen(entity)) {
            G.entityPool.reset(entity);
        }
    });

    AutoMoveSystem.hasLeftScreen = function hasLeftScreen(entity) {
        if (entity.direction === G.autoMoveable.direction.LEFT) {
            return entity.x + entity.width < 0;
        }

        return entity.x > G.constants.WORLD_WIDTH;
    };

    G.AutoMoveSystem = AutoMoveSystem;
}());