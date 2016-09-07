(function () {
    'use strict';

    function ImageRenderSystem(context) {
        this.context = context;
    }

    ImageRenderSystem.prototype = G.system.create(function next(entity) {
        var image = entity.image instanceof Function ? entity.image() : entity.image;

        this.context.drawImage(
            image,
            G.getScreenXPos(entity.x),
            G.getScreenYPos(entity.y),
            G.getScreenXPos(entity.width),
            G.getScreenYPos(entity.height)
        );
    });

    G.ImageRenderSystem = ImageRenderSystem;
}());