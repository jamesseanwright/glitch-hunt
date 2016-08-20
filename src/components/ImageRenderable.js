(function () {
    'use strict';

    G.ImageRenderable = function ImageRenderable(image) {
        this.image = image;

        G.imageRenderSystem.register(this);
    };
}())
