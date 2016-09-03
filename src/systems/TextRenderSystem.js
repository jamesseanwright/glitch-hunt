(function () {
    'use strict';

    function TextRenderSystem(context) {
        this.context = context;
    }

    TextRenderSystem.prototype = G.system.create(function next(entity) {
        var text = typeof entity.text === 'function' ? entity.text() : entity.text;

        this.context.fillStyle = entity.fontFill;
        this.context.font = entity.font;

        this.context.fillText(
            text,
            G.getScreenXPos(entity.x + entity.textXOffset),
            G.getScreenYPos(entity.y + entity.textYOffset)
        )
    });

    G.TextRenderSystem = TextRenderSystem;
}());