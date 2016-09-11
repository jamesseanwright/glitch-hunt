# Glitch Hunt

![Preview](https://raw.githubusercontent.com/jamesseanwright/glitch-hunt/master/preview.gif)

A HTML5 Canvas game for [js13kGames 2016](http://js13kgames.com/). Uses OscillatorNode for audio and music.

Patch the glitches in the system by pressing the keys on your keyboard as they enter the capture zone. Sometimes, a glitch will be so severe that you must enter the system and fight it!


## Play Online

Coming soon!


## Supported Browsers

* Chrome
* Firefox


## Controls

### Hacking

Press the keys that appear on screen as they enter the capture zone.


### Boss Battle

* Arrow keys - move
* A - jump
* S - shoot


## Local Development

Once you've cloned this repository, you'll need to run the install script. This cURLs the [NanoTunes](https://github.com/jamesseanwright/nanotunes) library into the `lib` directory.

You'll also need to install [Closure Compiler](https://developers.google.com/closure/compiler/) and ensure that it is available on your path; you could write a [shell wrapper](https://gist.github.com/jamesseanwright/4b8e4c907c231a0f7ee71e01f5a33163) to achieve this. I haven't tested this with the version on npm, but theoretically this should work.

The project follows the Entity Component System design pattern, which in this case takes inspiration from [Richard Lord](http://www.richardlord.net/blog/what-is-an-entity-framework)'s implementation:

* Entity - a grouping of components
* Component - Attaches properties to an entity and registers it with the underlying system
* System - contains the logic for a particular type of component

The codebase isn't perfect and definitely needs some work!

### Tasks

* `./tasks/install.sh` - cURLs NanoTunes into the `lib` directory. Run this before building
* `./tasks/build.sh` - bundles and minifies the source with Closure Compiler, and creates a ZIP of the output