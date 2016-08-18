(function () {
    'use strict';
    
    var gameState = {
        title: function title() {
            var button = G.entityPool.get('button');
            var logo = G.entityPool.getSingleton('logo');

            button.init('New Game', 0.34, 0.3, 0.3, 0.2, function () {
                G.entityPool.reset('button', button);
                G.entityPool.resetSingleton('logo');
                gameState.hacking();
            });
        },

        hacking: function hacking() {

        }
    };

    gameState.title();
}());