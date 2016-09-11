(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.27;

    function InstructionsFourthLine() {
	    G.positionable(this, X, Y);
	    G.textRenderable(this, 'the zone, you must press the key on your keyboard.', 12);
    }

    G.InstructionsFourthLine = InstructionsFourthLine;
}());