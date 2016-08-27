(function () {
    'use strict';

    G.imageRenderSystem = new G.ImageRenderSystem(G.renderingContext);    
    G.textRenderSystem = new G.TextRenderSystem(G.renderingContext);
	G.rectRenderSystem = new G.RectRenderSystem(G.renderingContext);
	G.clickSystem = new G.ClickSystem(G.outputCanvas);
	G.autoMoveSystem = new G.AutoMoveSystem();
}());