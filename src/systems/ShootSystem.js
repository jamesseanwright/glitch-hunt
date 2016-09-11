(function () {
    'use strict';

    var SHOOT_KEY = 's';
    var SHOOT_THRESHOLD_MS = 300;

    function ShootSystem() {
        this.lastShotTimeMs = SHOOT_THRESHOLD_MS + 1;
    }

    ShootSystem.prototype = G.system.create(function next(entity, timestamp) {
        var entityToShoot;

        if (G.keyboard.isPressed(SHOOT_KEY) && timestamp - this.lastShotTimeMs > SHOOT_THRESHOLD_MS) {
            entityToShoot = G.entityPool.get(entity.entityToShoot);
            entityToShoot.init(entity.x, entity.y + entity.shootYOffset, entity.direction);
            G.audio.shoot();
            this.lastShotTimeMs = timestamp;
        }
    });

    G.ShootSystem = ShootSystem;
}());