(function () {
    'use strict';

    function RectRenderSystem(context) {
        this.context = context;
    }

    RectRenderSystem.prototype = G.system.create(function next(entity, context) {
        if (entity.fill) {
            this.context.fillStyle = entity.fill;
        
            this.context.fillRect(
                G.getScreenXPos(entity.x),
                G.getScreenYPos(entity.y),
                G.getScreenXPos(entity.width),
                G.getScreenYPos(entity.height)
            );
        }

        if (entity.stroke) {
            this.context.strokeStyle = entity.stroke;
        
            this.context.strokeRect(
                G.getScreenXPos(entity.x),
                G.getScreenYPos(entity.y),
                G.getScreenXPos(entity.width),
                G.getScreenYPos(entity.height)
            );
        }
    });

    G.RectRenderSystem = RectRenderSystem;
}());