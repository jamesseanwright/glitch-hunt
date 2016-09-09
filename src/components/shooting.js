(function () {
    'use strict';

    G.shooting = function shooting(entity, entityToShoot, shootYOffset) {
		entity.entityToShoot = entityToShoot;
        entity.shootYOffset = shootYOffset;

        G.shootSystem.register(entity);
    };
}());