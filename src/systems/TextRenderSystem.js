'use strict';

function TextRenderSystem(context) {
    this.context = context;
}

TextRenderSystem.prototype = system.create(function next(entity, context) {
    this.context.fillStyle = entity.fontFill;
    this.context.font = entity.font;

    this.context.fillText(
        entity.text,
        getScreenXPos(entity.x + entity.textXOffset),
        getScreenYPos(entity.y + entity.textYOffset)
    )
});