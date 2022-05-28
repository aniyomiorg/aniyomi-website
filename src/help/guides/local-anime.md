---
title: Local anime
description: All the information you would need to watch your own local anime.
lang: en-US
---

# Local anime

Follow the steps below to create local anime.

1. Create a folder named `localanime` in the `/Aniyomi/` folder.
    <ul>
  		<li> The `/Aniyomi/` folder is located in the root of phone's **internal storage** or **external SD card** and it's **not related** to the `eu.kanade.tachiyomi/` folder or the download location in the settings.</li>
		<li> If you don't have a `/Aniyomi/` folder located in the folders mentioned above, you can simply create it.</li>
    </ul>
1. Place correctly structured anime inside `/Aniyomi/localanime/`.
	<ul>
  		<li>Optional: If you're adding anime in folders, add a file named `.nomedia` to the local folder so images do not show up in the gallery</li>
	</ul>
1. You can then access the anime in <Navigation item="browse"/> → **Local anime source**.

If you add more episodes then you'll have to manually refresh the episode list (by pulling down the list).

Supported episode formats are .mp4 and .mkv video files.

::: c-warning
Remember to give the app storage permissions.
:::

## Folder Structure

Aniyomi requires a specific folder structure for local anime to be correctly processed. Local anime will be read from the `Aniyomi/localanime` folder. Each anime must have a `Anime` folder. Episode videos will then go into the anime folder. See below for more information on archive files. You can refer to the following example:

::: guide Example (Folder)
<div class="side-by-side">
	<ul class="file-tree">
		<li>
			/sdcard/Aniyomi/localanime
			<ul>
				<li>
					<span class="ft-icon ft-folder">Anime title</span>
					<ul>
						<li>
							<span class="ft-icon ft-video">ep1.mp4</span>
						</li>
						<li>
							<span class="ft-icon ft-video">ep2.mkv</span>
						</li>
						<li>
							<span class="ft-icon ft-image">cover.jpg</span>
						</li>
					</ul>
				</li>
				<li>...</li>
			</ul>
		</li>
	</ul>
	<ul class="file-tree">
		<li>
			/storage/18F5-2C11/Aniyomi/localanime
			<ul>
				<li>
					<span class="ft-icon ft-folder">Anime title</span>
					<ul>
						<li>
							<span class="ft-icon ft-video">ep3.mp4</span>
						</li>
						<li>
							<span class="ft-icon ft-video">ep4.mkv</span>
						</li>
					</ul>
				</li>
				<li>...</li>
			</ul>
		</li>
	</ul>
</div>
:::

Aniyomi will see four episodes in a single anime.
The path to the folder with videos must contain both the anime title (as seen above).

::: guide-empty
<figure class="centered">
	<h4>Example structure using the file manager</h4>
	<p>Here, the anime name is <strong>test</strong> so the file structure is <code>/Aniyomi/localanime/test/episodes</code>.</p>
	<img class="zoomable" height="300" :src="$withBase('/assets/guides_local-anime.jpg')">
</figure>
:::

## Advanced

### Editing local anime details

It is possible to add details to local anime. Like anime from other catalogs, you add information about the anime such as the author, artist, description, and genre tags.

To import details along with your local anime, you have to create a json file. It can be named anything but it must be placed within the **Anime** folder. A standard file name is `details.json`. This file will contain the extended details about the anime in the `JSON` format. You can see the example below on how to build the file. Once the file is there, the app should load the data when you first open the anime or you can pull down to refresh the details.

You can copy the following example and edit the details as needed:
``` json
{
	"title": "Example Title",
	"author": "Example Author/Animation studio",
	"artist": "Example Artist/Fansub/whatever",
	"description": "Example Description",
	"genre": ["genre 1", "genre 2", "etc"],
	"status": "0",
	"_status values": ["0 = Unknown", "1 = Ongoing", "2 = Completed", "3 = Licensed"]
}
```

### Using a custom cover image

It is also possible to use a custom image as a cover for each local anime.

To do this, you only need to place the image file, that needs to be named
`cover.jpg`, in the root of the anime folder. The app will then use your
custom image in the local source listing.
