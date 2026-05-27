---
sidebar_position: 2
description: How to set up BBP configs in your mod.
---

# Creating a Mod Config

There are two ways to create a config for your mod.

## Basic Configuration
This should be used when you only need text, number, and boolean fields. Simply add the values to your `mod.json` file, and they will appear in-game.
```jsx title="Mods/my-first-mod/mod.json"
{
    "id": "my-first-mod",
    "name": "My First Mod",
    "author": "Me!",
    "description": "This is my awesome mod! :D",
    "version": "1.0.0",
    "config": {
        "NumberOption": 5,
        "TextOption": "hello!",
        "Checkmark": true,
        "Category": {
            "AnotherTextOption": "wow!!!"
        }
    }
}
```
![auto-generated-config](assets/auto-generated-config.png)

## Advanced Configuration
This should be used when you need complex elements that aren't available in the basic configuration. It gives you full control over the ImGui renderer.\
To use this method, create a file named `config.lua` inside `Mods/your-mod-id/` and then write your own ImGui interface in it.
As soon as you include a config.lua file in your mod, the interface logic of the Basic Configuration gets disabled entirely and no configs will be displayed automatically. Keep in mind that you should still write the configs table in `mod.json` though, because the values in there are used as the default configs for your mod.\
```jsx title="Mods/my-first-mod/config.lua"
imgui.SeparatorText("Fancy Category")

mod.config.NumberOption = helpers.InputFloat("NumberOption", mod.config.NumberOption, 0, 10)
mod.config.TextOption = helpers.InputText("TextOption", mod.config.TextOption)

imgui.Separator()

imgui.Text("Category")
mod.config.Category.AnotherTextOption = helpers.InputText("AnotherTextOption", mod.config.Category.AnotherTextOption)

imgui.Separator()

mod.config.Checkmark = helpers.InputBool("Checkmark", mod.config.Checkmark)
if imgui.Button("Click Me") then
    print("I was clicked!")
end
```
![advanced-config](assets/advanced-config.png)

You may have noticed that while you'd normally access your mod data with `mods["your-mod-id"]`, in this file specifically you can just use `mod` instead.

## How Configs are Saved

When you click 'Save Changes' in the Mods menu, BBP creates another json file in your mod folder, named `config.json`. This new file contains the configs chosen by the player. The configs in your `mod.json` stay the same, because they are the default values.\
If you're using an Advanced Configuration, you should still write the config table in `mod.json`, as you would for a Basic Configuration, to prevent issues with the 'reset configs' feature.

## Using the Configs in your mod code
All config values can be accessed from the global `mods` table. You can read and write them like this:
```jsx title="lua"
-- reading config values
local configValue = mods["your-mod-id"].config.valueName

-- writing config values
mods["your-mod-id"].config.otherValueName = 42

-- bbp does not save config changes automatically, so remember
-- to save your changes to the config.json after writing!
bbp.utils.saveConfig("your-mod-id")
```
