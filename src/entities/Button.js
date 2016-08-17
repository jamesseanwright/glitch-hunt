'use strict';

function Button(text, x, y, width, height, action) {
    Positionable.call(this, x, y);
    RectRenderable.call(this, 'white', 'green', width, height);
    TextRenderable.call(this, text, '16px monospace', 'white', 0.03, 0.14);
    Clickable.call(this, action);
}