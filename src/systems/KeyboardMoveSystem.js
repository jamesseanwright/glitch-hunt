(function () {
    'use strict';

    function KeyboardMoveSystem() {

    }

    KeyboardMoveSystem.prototype = G.system.create(function next(entity) {
        var key;

        for (var i = 0; i < G.keyboardMoveable.keys.length; i++) {
            key = G.keyboardMoveable.keys[i];

            if (G.keyboard.isPressed(key.name)) {
                entity.direction = key.direction;
                entity.x += entity.speed * entity.direction;

                if (!entity.isMoving) {
                    entity.onMove(entity.direction === G.keyboardMoveable.direction.LEFT);
                    entity.isMoving = true;                   
                }
            } else if (G.keyboard.isNothingPressed() && entity.isMoving) {
                entity.onStop();
                entity.isMoving = false;
            }
        }
    });

    G.KeyboardMoveSystem = KeyboardMoveSystem;
}());