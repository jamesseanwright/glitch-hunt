(function () {
    'use strict';

    var KEY_GEN_INTERVAL_MS = G.constants.KEY_GEN_INTERVAL_MS;

    function GeneratorSystem() {
		this.lastGenerationTime = 0;
    }

    GeneratorSystem.prototype = G.system.create(function next(entity, timestamp) {
		if (this.lastGenerationTime + KEY_GEN_INTERVAL_MS < timestamp) {
            var generatedEntity = G.entityPool.get(entity.entityToGenerate);

            generatedEntity.init(entity.x, entity.y, entity.width, entity.height, G.gameState.computeSpeed);
            this.lastGenerationTime = timestamp;
        }
    });

    G.GeneratorSystem = GeneratorSystem;
}());