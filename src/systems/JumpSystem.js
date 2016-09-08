(function () {
    'use strict';

    var JUMP_KEY = 'a';

    function JumpSystem() {

    }

    JumpSystem.prototype = G.system.create(function next(entity) {
        var isDescending;
        var direction;
        var y;

        if (G.keyboard.isPressed(JUMP_KEY)) {
            isDescending = entity.y >= entity.baseY - entity.jumpHeight;
            direction = isDescending ? 1 : -1;
            y = entity.y + entity.jumpSpeed * direction;

            entity.y += y;
        }
    });

    G.JumpSystem = JumpSystem;
}());