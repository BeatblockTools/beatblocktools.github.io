---
sidebar_position: 1
description: How to prepare a new mod folder and create your first mod.
---

# Creating a Mod

This guide covers creating a mod that appears in the mod list and does nothing.

1) Create a new folder in your `Mods` folder for your mod. It's recommended to name it in `kebab-case`, but it is not forced.

![creating folder](assets/creating-mod-folder.png)

2) In your new folder, create a new file named `mod.json`. This file will hold the metadata about your mod. You should ideally use the folder name as your id.

```jsx title="Mods/my-first-mod/mod.json"
{
    "id": "my-first-mod",
    "name": "My First Mod",
    "author": "Me!",
    "description": "This is my awesome mod! :D",
    "version": "1.0.0",
    "config": {},
    "depends": {},
    "conflicts": {}
}
```

3) When you launch the game, your mod will appear in the Mods menu.

![viewing first mod](assets/viewing-first-mod.png)

## Changing the Mod Icon (Optional)

If you wanna use a custom mod icon, simply put your icon in `Mods/my-first-mod/icon.png`.\
The icon must be 73x33 and has no color limitations.

## Adding dependencies and conflicts (Optional)

You can use the two fields `depends` and `conflicts` to list mod IDs from other mods that your mod either requires to run correctly, or can't coexist with. Here is an example of two dependencies and two conflicts.
```jsx title="Mods/my-first-mod/mod.json"
"depends": {
    "epic-lib":"",
    "the-other-lib":">=200.0.0"
},
"conflicts": {
    "really-big-mod":"",
    "made-up-id":">1.1.2"
}
```
IDs are always the **key** and their versions always the **value**. Leaving the version as an empty string matches *all* versions, but you can optionally match specific versions with the following specifications: `=` `<=` `>=` `<` `>`

## Why?

Creating this file...
- lets Beatblock Plus recognize the mod, so it appears in crash logs and the Mods menu.
- makes your mod toggleable through the Mods menu.
- allows the mod to use Beatblock Plus features such as asset injection.
- is a required step for uploading your mods to the modding discord server.

