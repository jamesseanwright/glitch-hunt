'use strict';

function Button(text, x, y, width, height, action) {
    Positionable.call(this, x, y);
    RectRenderable.call(this, 'white', 'green', width + 0.1, height);
    TextRenderable.call(this, text, '16px monospace', 'white', 0.1, 0.15);
    Clickable.call(this, action);
}