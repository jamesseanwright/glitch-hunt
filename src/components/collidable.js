(function () {
    'use strict';

    G.collidable = function collidable(entity) {
        G.collisionSystem.register(entity);
    };

    G.collidable.deregister = function deregister(entity) {
        G.collisionSystem.deregister(entity);
    };
}());