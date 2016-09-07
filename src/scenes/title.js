(function () {
    'use strict';

    G.scenes.title = {
        start: function start() {
            this.button = G.entityPool.get('button');
            this.logo = G.entityPool.getSingleton('logo');

            var buttonX = 0.355;
            var buttonY = 0.5;
            var buttonWidth = 0.3;
            var buttonHeight = 0.2;

            this.button.init('New Game', buttonX, buttonY, buttonWidth, buttonHeight, function () {
                G.scenes.title.end();
                G.scenes.boss.start();
            });
        },

        end: function end() {
            G.entityPool.reset(this.button);
            G.entityPool.resetSingleton('logo');
        }
    };
}());