(function () {
    'use strict';

    G.keyboardMoveable = function capturing(entity, speed) {
        entity.speed = speed;
        
        G.keyboardMoveSystem.register(entity);
    };
}());