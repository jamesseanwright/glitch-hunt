'use strict';

function TextRenderable(text, font, fill, xOffset, yOffset) {
    this.font = font;
    this.fontFill = fill;
    this.textXOffset = xOffset;
    this.textYOffset = yOffset;
    this.text = text;

    textRenderSystem.register(this);
}