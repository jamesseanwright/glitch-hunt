(function () {
    'use strict';

    G.Generating = function Generating(entityToGenerate) {
        this.entityToGenerate = entityToGenerate;
        
        G.generatorSystem.register(this);
    };
}());