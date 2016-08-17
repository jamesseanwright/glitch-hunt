(function () {
    'use strict';

    G.Clickable = function Clickable(action) {
        this.clickAction = action;
        
        G.clickSystem.register(this);
    };
}());