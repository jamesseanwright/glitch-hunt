'use strict';

function TextRenderable(text, font, fill, x, y) {
    this.font = font;
    this.fill = fill;
    this.text = text;
    this.x = x; // TODO - move to Positionable
    this.y = y;

    textRenderableSystem.register(this);
}