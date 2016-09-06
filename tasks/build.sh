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
	--js src/systems/CaptureSystem.js \
	--js src/systems/ClickSystem.js \
	--js src/systems/ComputedPositionSystem.js \
	--js src/systems/GeneratorSystem.js \
	--js src/systems/ImageRenderSystem.js \
	--js src/systems/RectRenderSystem.js \
	--js src/systems/ShrinkSystem.js \
	--js src/systems/TextRenderSystem.js \
	--js src/systems/initSystems.js \
	\
	--js src/components/autoMoveable.js \
	--js src/components/capturable.js \
	--js src/components/capturing.js \
	--js src/components/clickable.js \
	--js src/components/computedPositionable.js \
	--js src/components/generating.js \
	--js src/components/imageRenderable.js \
	--js src/components/positionable.js \
	--js src/components/rectRenderable.js \
	--js src/components/shrinkable.js \
	--js src/components/textRenderable.js \
	\
	--js src/entities/Button.js \
	--js src/entities/CaptureZone.js \
	--js src/entities/Hud.js \
	--js src/entities/Key.js \
	--js src/entities/KeyGen.js \
	--js src/entities/Logo.js \
	--js src/entities/Screen.js \
	--js src/entities/entityPool.js \
	\
	--js src/scenes/title.js \
	--js src/scenes/hacking.js \
	--js src/scenes/boss.js \
	\
	--js src/gameLoop.js \
	\
	--js_output_file dist/index.min.js \
	--compilation_level ADVANCED_OPTIMIZATIONS \
	--externs externs.js

cp src/index.html dist/
cp src/index.css dist/

zip -9 -j -D -X -r glitch-jw.zip dist/*