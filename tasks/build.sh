#!/usr/bin/env sh

if [ -e dist ]
then
	rm -rf dist/*
else
	mkdir dist
fi

closure-compiler \
	--js src/init.js \
	--js src/images.js \
	--js src/getScreenPos.js \
	--js src/keyboard.js \
	\
	--js src/systems/system.js \
	--js src/systems/AutoMoveSystem.js \
	--js src/systems/CaptureSystem.js \
	--js src/systems/ClickSystem.js \
	--js src/systems/GeneratorSystem.js \
	--js src/systems/ImageRenderSystem.js \
	--js src/systems/RectRenderSystem.js \
	--js src/systems/ShrinkSystem.js \
	--js src/systems/TextRenderSystem.js \
	--js src/systems/initSystems.js \
	\
	--js src/components/AutoMoveable.js \
	--js src/components/Capturable.js \
	--js src/components/Capturing.js \
	--js src/components/Clickable.js \
	--js src/components/Generating.js \
	--js src/components/ImageRenderable.js \
	--js src/components/Positionable.js \
	--js src/components/RectRenderable.js \
	--js src/components/Shrinkable.js \
	--js src/components/TextRenderable.js \
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
	--js src/scenes/hacking.js \
	--js src/scenes/title.js \
	\
	--js src/gameLoop.js \
	\
	--js_output_file dist/index.min.js \
	--compilation_level ADVANCED_OPTIMIZATIONS \
	--externs externs.js

cp src/index.html dist/
cp src/index.css dist/
cp -r src/images/* dist # flattening the dir saves ~100 bytes

zip -9 -j -D -X -r glitch-jw.zip dist/*