(function () {
    'use strict';

    G.generating = function generating(entity, entityToGenerate) {
        entity.entityToGenerate = entityToGenerate;

        G.generatorSystem.register(entity);
    };
}());