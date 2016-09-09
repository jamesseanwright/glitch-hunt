(function () {
    'use strict';

    G.jumping = function jumping(entity, baseY, jumpSpeed) {
        entity.baseY = baseY;
        entity.jumpSpeed = jumpSpeed;

        G.jumpSystem.register(entity);
    };
}());