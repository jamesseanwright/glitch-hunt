(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.12;

    function InstructionsFirstLine() {
	    G.positionable(this, X, Y);
	    G.textRenderable(this, 'We need you to fix some glitches in our system!', 12);
    }

    G.InstructionsFirstLine = InstructionsFirstLine;
}());