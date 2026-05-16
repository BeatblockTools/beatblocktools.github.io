---
sidebar_position: 1
description: Installation guide for Lovely Injector and Beatblock Plus.
---

# Installing Lovely Injector and BBP

This page covers the installation of **Lovely Injector** and **Beatblock Plus**.

## What are they?

- **Lovely Injector** is a runtime Lua injector for LÖVE2D, the game framework Beatblock uses. It allows us to inject our own code into the game.
- **Beatblock Plus** is a mod loader that provides utilities for mod developers and an ingame configuration menu for users.

<u>You need to have both of them installed.</u>

## Installing Lovely Injector

Note: It is recommended for Linux users to run Beatblock with proton rather than the native Linux build of the game. This is due to the fact that the proton build works completely fine for modding with no performance impact and no additional bugs, however the Linux Native version takes more effort to install lovely onto and comes with more bugginess (almost entirely relating to mods that have custom imgui windows). If you still wish to use the native Linux build, skip to the next part of the guide

1) Download the latest version of [lovely-injector](https://github.com/ethangreen-dev/lovely-injector/releases/latest).

![lovely-injector github releases page](assets/lovely-injector.png)

2) Navigate to your Beatblock's installation folder.

![opening installation folder](assets/opening-installation-folder.png)

3) Drag the `version.dll` file inside lovely-injector to your game's installation folder.

![putting lovely injector](assets/version-dll.png)

4) Launch the game. Make sure it also runs a terminal along with the game.

![lovely injector's terminal](assets/lovely-terminal.png)

If you see the terminal, that means you've successfully installed lovely-injector! Now for Beatblock Plus.

## Installing Lovely Injector on the native Linux build of Beatblock

1) Download the latest Linux version of [lovely-injector](https://github.com/ethangreen-dev/lovely-injector/releases/latest).

2) Navigate to your Beatblock's installation folder.

3) Drag the `liblovely.so` and `run_lovely_linux` files inside lovely-injector to your game's installation folder.
    Note: in the Beatblock folder, not the Beatblock/bin folder where the binary file is.

4) Replace the run_lovely_linux.sh contents with the following:
```
#!/bin/sh

if [ -z "$APPDIR" ]; then
  APPDIR="$(dirname "$(readlink -f "$0")")"
fi
export LD_LIBRARY_PATH="$APPDIR/lib/:$LD_LIBRARY_PATH"
if [ -z "$XDG_DATA_DIRS" ]; then #unset or empty
    XDG_DATA_DIRS="/usr/local/share/:/usr/share/"
fi
export XDG_DATA_DIRS="$APPDIR/share/:$XDG_DATA_DIRS"
if [ -z "$LUA_PATH" ]; then
    LUA_PATH=";"
fi
export LUA_PATH="$APPDIR/share/luajit-2.1.0-beta3/?.lua;$APPDIR/share/lua/5.1/?.lua;$LUA_PATH"
if [ -z "$LUA_CPATH" ]; then
    LUA_CPATH=";"
fi
export LUA_CPATH="$APPDIR/lib/?.so;$APPDIR/lib/lua/5.1/?.so;$LUA_CPATH"

LD_PRELOAD="$LD_PRELOAD:liblovely.so" "$APPDIR/bin/Beatblock" --mod-dir="./../../../../beatblock/Mods" "$@"
```

5) Navigate to Beatblock's Steam launch arguments and add `~/.local/share/Steam/steamapps/common/Beatblock/run_lovely_linux.sh %command%`.
    Note: If you want a terminal window like what Windows/proton has, put `xterm -hold -e ` before the path in the launch command.

6) Launch the game. This should create a `Mods` folder at ~/.local/share/beatblock

## Installing Beatblock Plus

1) Download the latest version of [Beatblock Plus](https://github.com/BeatblockTools/BeatblockPlus/releases/latest)

![beatblock plus github releases page](assets/beatblock-plus.png)

2) Open your game's save directory.

For Windows:
    - Press `Win + R`
    - Type `%appdata%\beatblock` and hit enter

For Linux (proton):
    - Right click on Beatblock on Steam
    - Click Properties
    - Click Installed Files
    - Go out from the folder that opens to the steamapps folder
    - Go to compatdata/3045200/pfx/drive_c/users/steamuser/AppData/Roaming/beatblock

For Linux (native):
    - Go to ~/.local/share/beatblock

For MacOS:
    - Open Finder
    - Press `Command + Shift + G`
    - Type `~/Library/Application Support/beatblock` and hit enter

3) Drag the Beatblock Plus folder inside the Mods folder

![mods folder](assets/mod-folder.png)

4) When you launch the game, you should see a 'Mods' button in the main menu.

![mods button](assets/mods-button.png)

That's all! You are now ready to download community made mods.
