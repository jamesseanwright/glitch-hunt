(function () {
    'use strict';

    G.clickable = function clickable(entity, action) {
        entity.clickAction = action;

        G.clickSystem.register(entity);
    };
}());