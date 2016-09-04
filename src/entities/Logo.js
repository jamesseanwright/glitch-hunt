(function () {
    'use strict';

    function Logo() {
        var x = 0.3;
        var y = 0.25;

	    G.positionable(this, x, y);
	    G.textRenderable(this, 'Glitch Hacker', '24 px monospace', 'white', 0, 0);
    }

    G.Logo = Logo;
}())