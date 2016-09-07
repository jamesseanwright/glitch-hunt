(function () {
    'use strict';

    G.imageRenderSystem = new G.ImageRenderSystem(G.renderingContext);
    G.textRenderSystem = new G.TextRenderSystem(G.renderingContext);
	G.rectRenderSystem = new G.RectRenderSystem(G.renderingContext);
	G.clickSystem = new G.ClickSystem(G.renderingCanvas);
	G.autoMoveSystem = new G.AutoMoveSystem();
	G.captureSystem = new G.CaptureSystem();
	G.generatorSystem = new G.GeneratorSystem();
	G.shrinkSystem = new G.ShrinkSystem();
	G.computedPositionSystem = new G.ComputedPositionSystem();
	G.bounceSystem = new G.BounceSystem();
}());