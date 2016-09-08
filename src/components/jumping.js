(function () {
    'use strict';

    G.jumping = function jumping(entity, baseY, jumpHeight, jumpSpeed) {
        entity.baseY = baseY;
        entity.jumpHeight = jumpHeight;
        entity.jumpSpeed = jumpSpeed;

        G.jumpSystem.register(entity);
    };
}());