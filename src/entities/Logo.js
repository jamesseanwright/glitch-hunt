(function () {
    'use strict';

    function Logo() {
        var x = 0.36;
        var y = 0.25;

	    G.positionable(this, x, y);
	    G.textRenderable(this, 'Glitch Hacker', 24);
    }

    G.Logo = Logo;
}())