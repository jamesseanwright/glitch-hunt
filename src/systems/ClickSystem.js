'use strict';

function ClickSystem(target) {
    var system = this;

    target.addEventListener('click', function (e) {
        system.update(e);
    });
}

ClickSystem.prototype = system.create(function next(entity, event) {
    var x = getScreenXPos(entity.x, true);
    var y = getScreenYPos(entity.y, true);
    var width = getScreenXPos(entity.width, true);
    var height = getScreenYPos(entity.height, true);

    var isInBounds = event.clientX >= x && event.clientX <= x + width && event.clientY >= y && event.clientY <= y + height;

    if (isInBounds) {
        entity.clickAction();
    }
});