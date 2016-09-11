(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.22;

    function InstructionsThirdLine() {
	    G.positionable(this, X, Y);
	    G.textRenderable(this, 'which is called the capture zone. When one enters', 12);
    }

    G.InstructionsThirdLine = InstructionsThirdLine;
}());