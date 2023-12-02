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

To import details along with your local anime, you have to create a JSON file with the name `details.json`.
It must be placed within the **Anime** folder.
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

## Editing episodes details

Similarly, episode details can be customized with a JSON file.

To customize the episode details, create a JSON file with the name `episodes.json`.
It must be placed within the **Anime** folder.
The structure of this JSON file will be a list of JSON objects.
Each JSON object must contain a `episode_number` key and optionally a `name`, `date_upload`, or `scanlator` key.

An example is as follows:

```json
[
	{
		"episode_number": 1,
		"name": "Ep 1 - Good vs. Evil",
		"date_upload": "2023-01-26T00:00:00"
	},
	{
		"episode_number": 1.5,
		"name": "Ep 1.5 - Inori",
		"scanlator": "Ending"
	}
]
```
::: warning For your information
As Aniyomi will use the `episode_number` key to match the episodes, the order of the JSON objects in the list doesn't matter.
:::


## Using a custom cover image

It is also possible to use a custom image as a cover for each local series.

To do this, you only need to place the image file, that needs to be named `cover.jpg`, in the root of the anime folder.
The app will then use your custom image in the local anime source listing.


<style scoped>
	@import "../../../.vitepress/theme/styles/tree.styl"
</style>
