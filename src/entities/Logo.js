(function () {
    'use strict';

    function Logo() {
        var x = 0.385;
        var y = 0.35;

	    G.positionable(this, x, y);
	    G.textRenderable(this, 'Glitch Hacker', '26 px monospace', 'white', 0, 0);
    }

    G.Logo = Logo;
}())