'use strict';

function TextRenderable(text, font, fill) {
    this.font = font;
    this.fill = fill;
    this.text = text;

    textRenderSystem.register(this);
}