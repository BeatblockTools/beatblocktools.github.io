---
sidebar_position: 4
description: How to edit the Beatblock code, using Lovely Injector.
---

# Patching the Game
We will use lovely-injector to inject our code into the game.
Why should you patch the game over just modifying its code? Because:
- It makes using multiple mods at once easier.
- It makes adding, removing and distributing mods easier.
- You won't have to remake your mod every update (patch mods might still break, but it's easier to fix them).

We will start by creating a folder called `lovely` inside our mod folder. This folder will contain our patches. After that we will create a `.toml` file for our patch, the name can be anything.
At the top of the `.toml` file you need to put a manifest. You can copy the format below:
```jsx title="Mods/my-first-mod/lovely/my_first_patch.toml"
[manifest]
version = "1.0.0"
dump_lua = true
priority = 0
```
`version` does nothing, you can ignore it.\
`dump_lua` decides whether the changed files should be saved inside `%Appdata%/beatblock/Mods/lovely`. This is useful for debugging so leave it as true.\
`priority` decides the order of the patch to load. Higher priority patches are loaded first. Change this only if your patches are loading in the wrong order.

lovely-injector has a lot of types of patches, but to keep the guide short I will only explain pattern and copy patching. These 2 will be the most useful ones.

## **Creating a Pattern Patch**
A pattern patch looks for a pattern in the code and injects code `before`, `at` or `after` it.
You can see an example below:
```jsx title="Mods/my-first-mod/lovely/patch.toml"
[[patches]]
[patches.pattern]
target = "preload/states.lua"
pattern = '''bs.new('Keybinds')'''
position = "after"
payload = '''
bs.new('Mods', "Mods/beatblock-plus/mod-loader/")
'''
match_indent = true
```
Here, it searches through the Beatblock's `preload/states.lua` file to find `bs.new('Keybinds')`. Once the pattern is found, the patch adds `bs.new('Mods', "Mods/beatblock-plus/mod-loader/")` to the next line. Pretty simple. Similarly `before` puts the payload in the line above the pattern and `at` overwrites the pattern.

## **Creating a Copy Patch**
A copy patch can either `prepend` or `append` a whole .lua file to a file in the game.
You can see an example below:
```jsx title="Mods/my-first-mod/lovely/patch.toml"
[[patches]]
[patches.copy]
target = "states/Mods.lua"
position = "prepend"
sources = ["mod-loader/Mods.lua"]
```
Here, it copies the contents of `mod-loader/Mods.lua` and prepends it to the contents of the `states/Mods.lua` file of Beatblock. If no such file exists, it creates a new one.

If you would like to learn more about lovely-injector, check out their GitHub repo: https://github.com/ethangreen-dev/lovely-injector
