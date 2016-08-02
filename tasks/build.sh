#!/usr/bin/env sh

if [ -e dist ]
then
	rm -rf dist/*
else
	mkdir dist
fi

usemin src/index.html --dest dist --output dist/index.html