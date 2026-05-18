---
sidebar_position: 7
description: How to add custom states to the game.
---

# Custom Gamestates

## What is a state?
A state contains the view and logic that the game performs right now. The Main Menu, Song Select, Editor, Gameplay itself, etc., are each a state.

## Adding your own state
Create a `states` folder inside your mod folder and then create a `.lua` file in it. Paste the following code inside the `.lua` file:
```jsx title="Mods/your-mod/states/MyCustomState.lua"
local st = Gamestate:new(MyCustomState)

st:setInit(function(self)   -- initialization function, called when the state is loaded
end)

st:setUpdate(function(self,dt)   -- update function, called every frame
end)

st:setBgDraw(function(self)   -- background draw function, called every frame
end)

st:setFgDraw(function(self)   -- foreground draw function, called every frame
end)

return st
```

When you launch the game, your custom state will be added to the game. To activate it, you write:
```lua
cs = bs.load('MyCustomState')
cs:init()
```
