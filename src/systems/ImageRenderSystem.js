(function () {
    'use strict';

    function ImageRenderSystem(context) {
        this.context = context;
    }

    ImageRenderSystem.prototype = G.system.create(function next(entity) {
        this.context.drawImage(entity.image, entity.x, entity.y);
    });

    G.ImageRenderSystem = ImageRenderSystem;
}());