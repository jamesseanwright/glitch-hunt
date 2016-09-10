(function () {
    'use strict';

    G.collidable = function collidable(entity) {
        G.collisionSystem.register(entity);
    };
}());