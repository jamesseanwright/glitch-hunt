(function () {
    'use strict';

    function AutoMoveSystem() {
    }

    AutoMoveSystem.prototype = G.system.create(function next(entity) {
        entity.x += entity.speed * entity.direction;
    });

    G.AutoMoveSystem = AutoMoveSystem;
}());