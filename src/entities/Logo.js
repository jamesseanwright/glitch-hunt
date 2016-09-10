(function () {
    'use strict';

    var X = 0.26;
    var Y = 0.25;

    function Logo() {
	    G.positionable(this, X, Y);
	    G.textRenderable(this, 'Glitch Hacker', 24);
    }

    G.Logo = Logo;
}())