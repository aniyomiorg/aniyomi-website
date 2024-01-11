---
title: Local anime source
titleTemplate: Guides
description: For users who would like to download and organize their own media.
---

# Local anime source

If you like to download and organize your media, then you want to know how to manage your own anime in Aniyomi.

::: warning
This page explores some advanced features.
:::

## Creating local series

1. In the location you specified as your storage location (e.g., `/Aniyomi/`), create a `localanime` folder. Place correctly structured series inside that (e.g. `/Aniyomi/localanime/`).

    > If adding series in folders it is recommended to add a file named `.nomedia` to the local folder so images and videos do not show up in the gallery.
1. You should now be able to access the series in <nav to="sources"> under **Local anime source**.

If you add more episodes then you'll have to manually refresh the episode list (by pulling down the list).

Supported episode formats are `.mp4` and `.mkv` video files.

### Folder structure

Aniyomi requires a specific folder structure for local series to be correctly processed.
Local anime will be read from the `localanime` folder.
Each series must have a `Anime` folder.
Videos will then go into the Anime folder.
See below for more information on archive files.
You can refer to the following example:

:::info Example
<div class="tree">
	<ul>
		<img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
		<span class="folder root">[your storage location]/localanime</span>
		<li>
			<img src="/img/folder.svg" class="tree-icon icon-folder">
			<span class="folder main">[the anime title]</span>
			<ul>
				<li>
					<img src="/img/jpeg.svg" class="tree-icon icon-jpeg">
					<span class="file jpg">cover<span class="file-extension">.jpg</span></span>
				</li>
				<li>
					<img src="/img/video.svg" class="tree-icon icon-video">
					<span class="file jpg">ep01<span class="file-extension">.mp4</span></span>
				</li>
				<li>
					<img src="/img/video.svg" class="tree-icon icon-video">
					<span class="file jpg">ep02<span class="file-extension">.mkv</span></span>
				</li>
			</ul>
		</li>
		<li>...</li>
	</ul>
</div>
:::

<style scoped>
	@import "../../../.vitepress/theme/styles/tree.styl"
</style>
