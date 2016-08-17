'use strict';

'use strict';

function RectRenderSystem(context) {
    this.context = context;
}

RectRenderSystem.prototype = system.create(function next(entity, context) {
    if (entity.fill) {
        this.context.fillStyle = entity.fill;
    
        this.context.fillRect(
            getScreenXPos(entity.x),
            getScreenYPos(entity.y),
            getScreenXPos(entity.width),
            getScreenYPos(entity.height)
        );
    }

    if (entity.stroke) {
        this.context.strokeStyle = entity.stroke;
    
        this.context.strokeRect(
            getScreenXPos(entity.x),
            getScreenYPos(entity.y),
            getScreenXPos(entity.width),
            getScreenYPos(entity.height)
        );
    }
});