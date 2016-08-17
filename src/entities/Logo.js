'use strict';

function Logo() {
    var x = 0.3;
    var y = 0.25;

    Positionable.call(this, x, y);
    TextRenderable.call(this, 'Glitch Hacker', '24 px monospace', 'white', 0, 0);
}