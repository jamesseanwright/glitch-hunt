(function () {
    'use strict';

    var JUMP_KEY = 'a';

    function JumpSystem() {
        this.i = 0; // TODO: this won't work if more than one entity wants to jump
    }

    JumpSystem.prototype = G.system.create(function next(entity) {
        if (G.keyboard.isPressed(JUMP_KEY)) {
            entity.isJumping = true;
        }

        if (entity.isJumping) {
            entity.y -= entity.jumpSpeed - G.constants.GRAVITY * this.i;
            this.i++;
        }

        if (entity.y >= entity.baseY) {
            entity.isJumping = false;
            entity.y = entity.baseY;
            this.i = 0;
        }
    });

    G.JumpSystem = JumpSystem;
}());