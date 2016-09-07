(function () {
    'use strict';

	G.autoMoveSystem = new G.AutoMoveSystem();
	G.bounceSystem = new G.BounceSystem();
	G.captureSystem = new G.CaptureSystem();
	G.clickSystem = new G.ClickSystem(G.renderingCanvas);
	G.computedPositionSystem = new G.ComputedPositionSystem();
	G.generatorSystem = new G.GeneratorSystem();
    G.imageRenderSystem = new G.ImageRenderSystem(G.renderingContext);
	G.keyboardMoveSystem = new G.KeyboardMoveSystem();
	G.rectRenderSystem = new G.RectRenderSystem(G.renderingContext);
	G.shrinkSystem = new G.ShrinkSystem();
    G.textRenderSystem = new G.TextRenderSystem(G.renderingContext);
}());