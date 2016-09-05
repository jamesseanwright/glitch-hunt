(function () {
    'use strict';

    G.textRenderable = function textRenderable(entity, text, fontSize) {
        entity.text = text;
        entity.fontSize = fontSize;

        G.textRenderSystem.register(entity);
    };
}());