(function () {
    'use strict';

    function KeyboardMoveSystem() {

    }

    KeyboardMoveSystem.prototype = G.system.create(function next(entity) {
        var key;
        
        for (var i = 0; i < KeyboardMoveSystem.keys.length; i++) {
            key = KeyboardMoveSystem.keys[i];

            if (G.keyboard.isPressed(key.name)) {
                entity.x += entity.speed * key.direction;
            }
        }
    });

    KeyboardMoveSystem.keys = [
        { name: 'ArrowLeft', direction: -1 },
        { name: 'ArrowRight', direction: 1 }
    ];

    G.KeyboardMoveSystem = KeyboardMoveSystem;
}());