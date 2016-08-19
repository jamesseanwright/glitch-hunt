(function () {
    'use strict';

    G.RectRenderable = function RectRenderable(stroke, fill) {
        this.stroke = stroke;
        this.fill = fill;

        G.rectRenderSystem.register(this);
    };
}())
