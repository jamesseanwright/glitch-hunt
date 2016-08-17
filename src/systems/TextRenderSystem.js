(function () {
    'use strict';

    function TextRenderSystem(context) {
        this.context = context;
    }

    TextRenderSystem.prototype = G.system.create(function next(entity, context) {
        this.context.fillStyle = entity.fontFill;
        this.context.font = entity.font;

        this.context.fillText(
            entity.text,
            G.getScreenXPos(entity.x + entity.textXOffset),
            G.getScreenYPos(entity.y + entity.textYOffset)
        )
    });

    G.TextRenderSystem = TextRenderSystem;
}());