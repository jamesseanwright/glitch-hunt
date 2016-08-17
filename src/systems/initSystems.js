(function () {
    'use strict';

    G.textRenderSystem = new G.TextRenderSystem(G.renderingContext);
	G.rectRenderSystem = new G.RectRenderSystem(G.renderingContext);
	G.clickSystem = new G.ClickSystem(G.outputCanvas);
}());