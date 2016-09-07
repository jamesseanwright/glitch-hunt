(function () {
    'use strict';

    G.imageRenderable = function imageRenderable(entity, image) {
        entity.image = image;

        G.imageRenderSystem.register(entity);
    };

    G.imageRenderable.deregister = function deregister(entity) {
        G.imageRenderSystem.deregister(entity);
    };
}());