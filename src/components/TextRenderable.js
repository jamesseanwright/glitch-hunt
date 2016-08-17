'use strict';

function TextRenderable(text, font, fill) {
    this.font = font;
    this.fontFill = fill;
    this.text = text;

    textRenderSystem.register(this);
}