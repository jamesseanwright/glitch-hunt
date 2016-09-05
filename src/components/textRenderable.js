(function () {
    'use strict';

    G.textRenderable = function textRenderable(entity, text, fontSize, xOffset, yOffset) {
        entity.text = text;
        entity.fontSize = fontSize;
        entity.xOffset = xOffset || 0;
        entity.yOffset = yOffset || 0;

        G.textRenderSystem.register(entity);
    };
}());