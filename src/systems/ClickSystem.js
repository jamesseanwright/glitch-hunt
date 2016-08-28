(function () {
    'use strict';

    function ClickSystem(target) {
        var system = this;

        target.addEventListener('click', function (e) {
            system.update(e);
        });
    }

    ClickSystem.prototype = G.system.create(function next(entity, event) {
        var x = G.getScreenXPos(entity.x);
        var y = G.getScreenYPos(entity.y);
        var width = G.getScreenXPos(entity.width);
        var height = G.getScreenYPos(entity.height);

        var isInBounds = event.clientX >= x && event.clientX <= x + width && event.clientY >= y && event.clientY <= y + height;

        if (isInBounds) {
            entity.clickAction();
        }
    });

    G.ClickSystem = ClickSystem
}());