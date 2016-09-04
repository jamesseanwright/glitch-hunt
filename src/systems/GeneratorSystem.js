(function () {
    'use strict';

    function GeneratorSystem() {
		this.lastGenerationTime = 0;
    }

    GeneratorSystem.prototype = G.system.create(function next(entity, timestamp) {
		if (this.lastGenerationTime + G.computations.computeKeyGenerationTime() < timestamp) {
            var generatedEntity = G.entityPool.get(entity.entityToGenerate);

            generatedEntity.init(entity.x, entity.y, entity.width, entity.height, G.computations.computeSpeed);
            this.lastGenerationTime = timestamp;
        }
    });

    G.GeneratorSystem = GeneratorSystem;
}());