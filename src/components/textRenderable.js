(function () {
    'use strict';

    G.textRenderable = function textRenderable(entity, text, font, fill, xOffset, yOffset) {
        entity.font = font;
        entity.fontFill = fill;
        entity.textXOffset = xOffset;
        entity.textYOffset = yOffset;
        entity.text = text;

        G.textRenderSystem.register(entity);
    };
}());