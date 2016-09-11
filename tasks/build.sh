#!/usr/bin/env sh

if [ -e dist ]
then
	rm -rf dist/*
else
	mkdir dist
fi

closure-compiler \
	--js src/constants.js \
	--js src/init.js \
	--js src/audio.js \
	--js src/gameState.js \
	--js src/images.js \
	--js src/getScreenPos.js \
	--js src/keyboard.js \
	--js src/computations.js \
	--js src/SpriteSheet.js \
	--js src/spriteSheets.js \
	\
	--js src/systems/system.js \
	--js src/systems/AutoMoveSystem.js \
	--js src/systems/BounceSystem.js \
	--js src/systems/CaptureSystem.js \
	--js src/systems/ClickSystem.js \
	--js src/systems/CollisionSystem.js \
	--js src/systems/ComputedPositionSystem.js \
	--js src/systems/FlashSystem.js \
	--js src/systems/GeneratorSystem.js \
	--js src/systems/ImageRenderSystem.js \
	--js src/systems/JumpSystem.js \
	--js src/systems/KeyboardMoveSystem.js \
	--js src/systems/RectRenderSystem.js \
	--js src/systems/ShootSystem.js \
	--js src/systems/ShrinkSystem.js \
	--js src/systems/SpriteAnimationSystem.js \
	--js src/systems/TextRenderSystem.js \
	--js src/systems/initSystems.js \
	\
	--js src/components/autoMoveable.js \
	--js src/components/bounceable.js \
	--js src/components/capturable.js \
	--js src/components/capturing.js \
	--js src/components/clickable.js \
	--js src/components/collidable.js \
	--js src/components/computedPositionable.js \
	--js src/components/flashing.js \
	--js src/components/generating.js \
	--js src/components/hurtable.js \
	--js src/components/imageRenderable.js \
	--js src/components/invincible.js \
	--js src/components/jumping.js \
	--js src/components/keyboardMoveable.js \
	--js src/components/positionable.js \
	--js src/components/rectRenderable.js \
	--js src/components/shrinkable.js \
	--js src/components/shooting.js \
	--js src/components/spriteAnimatable.js \
	--js src/components/textRenderable.js \
	\
	--js src/entities/Author.js \
	--js src/entities/Background.js \
	--js src/entities/Bullet.js \
	--js src/entities/Button.js \
	--js src/entities/CaptureZone.js \
	--js src/entities/GameOver.js \
	--js src/entities/GetReady.js \
	--js src/entities/Glitch.js \
	--js src/entities/Hud.js \
	--js src/entities/InstructionsTitle.js \
	--js src/entities/InstructionsFirstLine.js \
	--js src/entities/InstructionsSecondLine.js \
	--js src/entities/InstructionsThirdLine.js \
	--js src/entities/InstructionsFourthLine.js \
	--js src/entities/InstructionsFifthLine.js \
	--js src/entities/InstructionsSixthLine.js \
	--js src/entities/InstructionsSeventhLine.js \
	--js src/entities/InstructionsEighthLine.js \
	--js src/entities/Key.js \
	--js src/entities/KeyGen.js \
	--js src/entities/Logo.js \
	--js src/entities/Player.js \
	--js src/entities/Screen.js \
	--js src/entities/entityPool.js \
	\
	--js src/scenes/boss.js \
	--js src/scenes/gameOver.js \
	--js src/scenes/getReady.js \
	--js src/scenes/hacking.js \
	--js src/scenes/instructions.js \
	--js src/scenes/title.js \
	\
	--js src/gameLoop.js \
	\
	--js_output_file dist/index.min.js \
	--compilation_level ADVANCED_OPTIMIZATIONS \
	--externs externs.js

cp src/index.html dist/
cp src/index.css dist/
cp lib/nanotunes.min.js dist/

zip -9 -j -D -X -r glitch-hunt.zip dist/*