(function () {
    'use strict';

    function ImageRenderSystem(context) {
        this.context = context;
    }

    ImageRenderSystem.prototype = G.system.create(function next(entity) {
        this.context.drawImage(this.image, this.x, this.y);
    });

    G.ImageRenderSystem = ImageRenderSystem;
}());