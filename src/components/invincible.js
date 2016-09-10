(function () {
    'use strict';

    G.invincible = function invincible(entity) {
        entity.isInvincible = true;
    };

    G.invincible.deregister = function deregister(entity) {
        entity.isInvincible = false;
    };
}());