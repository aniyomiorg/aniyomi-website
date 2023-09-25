---
title: Advanced editing
titleTemplate: Local anime source - Guides
description: Advanced local anime metadata editing for enhanced library organization.
---

# Advanced editing
Advanced local anime metadata editing for enhanced library organization.

## Editing local anime details

It is possible to add details to local anime.
Like anime from other sources, you add information about the series such as the `author`, `artist`, `description`, and `genre` tags.

To import details along with your local anime, you have to create a JSON file.
It can be named anything but it must be placed within the **Anime** folder.
A standard file name is `details.json`.
This file will contain the extended details about the series in the `JSON` format.
You can see the example below on how to build the file.
Once the file is there, the app should load the data when you first open the anime or you can pull down to refresh the details.

You can copy the following example and edit the details as needed:

```json
{
	"title": "Example Title",
	"author": "Example Author",
	"artist": "Example Artist",
	"description": "Example Description",
	"genre": ["genre 1", "genre 2", "etc"],
	"status": "0",
	"_status values": ["0 = Unknown", "1 = Ongoing", "2 = Completed", "3 = Licensed", "4 = Publishing finished", "5 = Cancelled", "6 = On hiatus"]
}
```
::: tip
If you don't want to manually create the `details.json` file, you can alternatively use [this tool.](https://aniyomi-local.netlify.app)
:::

## Using a custom cover image

It is also possible to use a custom image as a cover for each local series.

To do this, you only need to place the image file, that needs to be named `cover.jpg`, in the root of the anime folder.
The app will then use your custom image in the local anime source listing.


<style scoped>
	@import "../../../.vitepress/theme/styles/tree.styl"
</style>
