(function () {
    'use strict';

    G.autoMoveSystem = new G.AutoMoveSystem();
    G.bounceSystem = new G.BounceSystem();
    G.captureSystem = new G.CaptureSystem();
    G.clickSystem = new G.ClickSystem(G.renderingCanvas);
    G.collisionSystem = new G.CollisionSystem();
    G.computedPositionSystem = new G.ComputedPositionSystem();
    G.flashSystem = new G.FlashSystem();
    G.generatorSystem = new G.GeneratorSystem();
    G.imageRenderSystem = new G.ImageRenderSystem(G.renderingContext);
    G.jumpSystem = new G.JumpSystem();
    G.keyboardMoveSystem = new G.KeyboardMoveSystem();
    G.rectRenderSystem = new G.RectRenderSystem(G.renderingContext);
    G.shootSystem = new G.ShootSystem();
    G.shrinkSystem = new G.ShrinkSystem();
    G.spriteAnimationSystem = new G.SpriteAnimationSystem();
    G.textRenderSystem = new G.TextRenderSystem(G.renderingContext);
}());