(function () {
    'use strict';

    G.rectRenderable = function rectRenderable(entity, stroke, fill) {
        entity.stroke = stroke;
        entity.fill = fill;

        G.rectRenderSystem.register(entity);
    };
}());