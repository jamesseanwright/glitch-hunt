(function () {
    'use strict';

    function KeyboardMoveSystem() {

    }

    KeyboardMoveSystem.prototype = G.system.create(function next(entity) {
        var key;

        for (var i = 0; i < G.keyboardMoveable.keys.length; i++) {
            key = G.keyboardMoveable.keys[i];

            if (G.keyboard.isPressed(key.name) && KeyboardMoveSystem.canMove(entity, key.direction)) {
                entity.isMoving = true;
                entity.direction = key.direction;
                entity.x += entity.speed * entity.direction;
                entity.onMove(entity.direction === G.keyboardMoveable.direction.LEFT);

                return;
            }
        }

        if (entity.isMoving) {
            entity.onStop();
            entity.isMoving = false;
        }
    });

    KeyboardMoveSystem.canMove = function canMove(entity, direction) {
        if (direction === G.keyboardMoveable.direction.LEFT) {
            return entity.x >= 0;
        }

        return entity.x + entity.width <= G.constants.WORLD_WIDTH;
    };

    G.KeyboardMoveSystem = KeyboardMoveSystem;
}());