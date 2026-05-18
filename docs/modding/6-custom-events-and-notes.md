---
sidebar_position: 6
description: How to add custom events and notes to the game.
---

# Custom Events and Notes

::::info[Note]
This wiki is not complete, as not much is known about how events and notes work. You will have to check the game's code most of the time.\
This also means that the information here might be inaccurate.
::::

# Loading Events
Whether you are adding an event or creating a custom note, you must create an event first.\
First, create a `.lua` file inside `Mods/your-mod/events/`. Then copy an event from the game as your template.

Not much is known about the event structure, but here are some predictions:
- `info` - Stores info that will be shown in the editor and how the events acts.
- `info.event` - The 'type' of the event.
- `info.name` - Name shown in the editor.
- `info.description` - Event description, seems to be only used for parameter descriptions. Example:
```lua
description = [[Parameters:
  time: Beat to spawn on
  angle: Angle to spawn at
  endAngle: (Optional) Angle to end up at
  spinEase: (Optional) Ease to use while rotating
  speedMult: (Optional) Speed multiplier for approach
]]
```
- `info.storeInChart` - Whether the event should be stored in the `chart.json` file. This seems to be `true` for notes and `false` for everything else.
- `info.allowInNoVFX` - Whether the event should be played if the VFX accessibility option is turned off.
- `info.tooltip` - Shown when you hover the event in the Event Palette.
- `onLoad` - Is called when the level loads.
- `onOffset` - Is called when the event is spawned in. (aka onBeat, minus the level's spawnOffset)
- `onBeat` - Is called when the event hits Cranky.
- `editorProperties` - Used for displaying the event's properties in the Event Editor when selected.
- `hitCount` - Seems to return the number of times you can hit a single note. ex. You can hit a hold note twice, and another time if the extra tap is enabled. Is always 0 for events.
- `shouldEditorDraw` - Returns whether the event should be drawn on the screen. It is used for large notes, like hold.

# Loading Entities
Entities are almost everything in the game. Blocks, Cranky, particles and some level backgrounds like in Lawrence and Terabyte are all entities.\
If you are adding a custom note, the note will not work without an entity.\
First, create a `.lua` file inside `./Mods/your-mod/entities/`. Paste the following template inside:
```jsx title="Mods/your-mod/entities/MyCustomEntity.lua"
MyCustomEntity = class('MyCustomEntity', Entity)

function MyCustomEntity:initialize(params) -- called when the entity is created
    Entity.initialize(self, params)
end

function MyCustomEntity:update(dt) -- called every frame
end

function MyCustomEntity:draw() -- called every frame, after update
end

return MyCustomEntity
```
- `initialize` - Called when the entity is first created. Used for declaring variables.
- `update` - Called every frame while the entity is active.
- `draw` - Called every frame, after update. Used for drawing the entity on screen.
