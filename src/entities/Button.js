'use strict';

function Button(text, x, y, width, height) {
    Positionable.call(this, x, y);
    TextRenderable.call(this, text, '16px monospace', 'white');
    RectRenderable.call(this, 'black', 'green', width, height);
}