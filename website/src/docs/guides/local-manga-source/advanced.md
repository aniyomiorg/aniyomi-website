---
title: Advanced editing
titleTemplate: Local source - Guides
description: Advanced local series metadata editing for enhanced library organization.
---

# Advanced editing
Advanced local series metadata editing for enhanced library organization.

## Editing local series details

It is possible to add details to local series.
Like series from other sources, you add information about the series such as the `author`, `artist`, `description`, and `genre` tags.

To import details along with your local series, you have to create a JSON file with the name `details.json`.
It must be placed within the **Series** folder.
This file will contain the extended details about the series in the `JSON` format.
You can see the example below on how to build the file.
Once the file is there, the app should load the data when you first open the series or you can pull down to refresh the details.

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
If you don't want to manually create the `details.json` file, you can alternatively use [this tool.](https://tachi-local.netlify.app/?utm\_source=tachi-website\&utm\_medium=referral\&utm\_campaign=tachi-website)
:::

## Editing chapter details

Similarly, the details of each chapter can be customized with a JSON file.

To customize the details, create a JSON file with the name `chapters.json`.
It must be placed within the **Series** folder.
The structure of this JSON file will be a list of JSON objects.
Each JSON object must contain a `chapter_number` key and optionally a `name`, `date_upload`, or `scanlator` key.

An example is as follows:

```json
[
	{
		"chapter_number": 1,
		"name": "Ch 1 - His Name Is...",
		"date_upload": "2022-03-22T00:00:00"
	},
	{
		"chapter_number": 1.5,
		"name": "Ch 1.5 - Genius",
		"scanlator": "TranslatingTeam"
	}
]
```
::: warning For your information
As Aniyomi will use the `chapter_number` key to match the chapters, the order of the JSON objects in the list doesn't matter.
:::

## Using a custom cover image

It is also possible to use a custom image as a cover for each local series.

To do this, you only need to place the image file, that needs to be named `cover.jpg`, in the root of the series folder.
The app will then use your custom image in the local source listing.


<style scoped>
	@import "../../../.vitepress/theme/styles/tree.styl"
</style>
