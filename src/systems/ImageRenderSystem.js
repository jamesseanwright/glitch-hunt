(function () {
    'use strict';

    function ImageRenderSystem(context) {
        this.context = context;
    }

    ImageRenderSystem.prototype = G.system.create(function next(entity) {
        if (entity.image instanceof ImageData) {
            this.context.putImageData(
                entity.image,
                G.getScreenXPos(entity.x),
                G.getScreenYPos(entity.y),
                null,
                null,
                G.getScreenXPos(entity.width),
                G.getScreenYPos(entity.height)
            );
        } else {
            this.context.drawImage(
                entity.image,
                G.getScreenXPos(entity.x),
                G.getScreenYPos(entity.y),
                G.getScreenXPos(entity.width),
                G.getScreenYPos(entity.height)
            );
        }
    });

    G.ImageRenderSystem = ImageRenderSystem;
}());