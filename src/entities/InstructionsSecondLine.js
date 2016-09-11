(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.17;

    function InstructionsSecondLine() {
	    G.positionable(this, X, Y);
	    G.textRenderable(this, 'Keys will scroll into the on screen rectangle,', 12);
    }

    G.InstructionsSecondLine = InstructionsSecondLine;
}());