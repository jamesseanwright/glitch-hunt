(function () {
    'use strict';

    function AutoMoveSystem() {
    }

    AutoMoveSystem.prototype = G.system.create(function next(entity) {
        entity.x += entity.speed * entity.direction;
    });

    AutoMoveSystem.direction = {
        LEFT: -1,
        RIGHT: 1
    }

    G.AutoMoveSystem = AutoMoveSystem;
}());