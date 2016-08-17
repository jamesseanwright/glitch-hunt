'use strict';

function Button(text, x, y, width, height) {
    Positionable.call(this, x, y);
    RectRenderable.call(this, 'white', 'green', width + 0.1, height);
    TextRenderable.call(this, text, '16px monospace', 'white', 0.1, 0.15);
}