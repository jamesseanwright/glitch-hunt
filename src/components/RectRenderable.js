(function () {
    'use strict';

    G.RectRenderable = function RectRenderable(stroke, fill, width, height) {
        this.stroke = stroke;
        this.fill = fill;
        this.width = width;
        this.height = height;

        G.rectRenderSystem.register(this);
    };
}())
