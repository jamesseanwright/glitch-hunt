'use strict';

function RectRenderable(stroke, fill, width, height) {
    this.stroke = stroke;
    this.fill = fill;
    this.width = width;
    this.height = height;

    rectRenderSystem.register(this);
}