(function () {
    'use strict';

    G.scenes.title = function title() {
        var button = G.entityPool.get('button');
        var logo = G.entityPool.getSingleton('logo');

        var buttonX = 0.355;
        var buttonY = 0.5;
        var buttonWidth = 0.3;
        var buttonHeight = 0.2;

        button.init('New Game', buttonX, buttonY, buttonWidth, buttonHeight, function () {
            G.entityPool.reset(button);
            G.entityPool.resetSingleton('logo');
            G.scenes.hacking();
        });
    };
}());