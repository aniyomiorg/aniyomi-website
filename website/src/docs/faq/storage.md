---
title: Storage
titleTemplate: Frequently Asked Questions
description: Understanding Storage Permissions.
---

# Storage location

Aniyomi manages several things within a selected storage location, including automatic backups, chapter downloads, and the Local source.

The following illustrates the folder structure:

:::info Example
<div class="tree">
  <ul>
    <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
    <span class="folder root">[your selected storage location]</span>
    <li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">autobackup</span>
      <ul>
        <li>
          <img src="/img/tachiyomi-book.png" alt="File" class="tree-icon icon-tachiyomi">
          <span class="file jpg">xyz.jmir.tachiyomi.mi_yyyy-mm-dd_hh-mm<span class="file-extension">.tachibk</span></span>
        </li>
        <li>
          <img src="/img/tachiyomi-book.png" alt="File" class="tree-icon icon-tachiyomi">
          <span>...</span>
        </li>
      </ul>
    </li>
    <li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">downloads</span>
      <ul>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder dynamic">Source name (LANG)</span>
            <ul>
              <li>
                <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
                <span class="folder dynamic">Anime title</span>
                <ul>
                  <li>
                    <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
                    <span class="file mp4">Episode_1</span>
                    <ul>
                      <li>
                        <img src="/img/video.svg" alt="Video" class="tree-icon icon-video">
                        <span class="file mp4">Episode_1<span class="file-extension">.mp4</span></span>
                      </li>
                      <li>
                        <img src="/img/video.svg" alt="Video" class="tree-icon icon-cbz">
                        <span class="file mp4">...</span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
                <span class="folder dynamic">Series title</span>
                <ul>
                  <li>
                    <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-cbz">
                    <span class="file cbz">Chapter01<span class="file-extension">.cbz</span></span>
                  </li>
                  <li>
                    <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-cbz">
                    <span class="file cbz">...</span>
                  </li>
                </ul>
              </li>
            </ul>
        </li>
      </ul>
    </li>
    <li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">localanime</span>
      <ul>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder dynamic">Anime title</span>
          <ul>
            <li>
              <img src="/img/video.svg" alt="Video" class="tree-icon icon-video">
              <span class="file mp4">Episode_1<span class="file-extension">.mp4</span></span>
            </li>
            <li>
              <img src="/img/video.svg" alt="Video" class="tree-icon icon-mp4">
              <span class="file mp4">...</span>
            </li>
          </ul>
        </li>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder dynamic">Other anime title</span>
          <ul>
            <li>
              <img src="/img/video.svg" alt="Video" class="tree-icon icon-video">
              <span class="file mp4">Episode_1<span class="file-extension">.mp4</span></span>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">local</span>
      <ul>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder dynamic">Series title</span>
          <ul>
            <li>
              <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-cbz">
              <span class="file cbz">Chapter01<span class="file-extension">.cbz</span></span>
            </li>
            <li>
              <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-cbz">
              <span class="file cbz">...</span>
            </li>
          </ul>
        </li>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder dynamic">Other series title</span>
          <ul>
            <li>
              <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-cbz">
              <span class="file cbz">Chapter01<span class="file-extension">.cbz</span></span>
            </li>
          </ul>
        </li>
      </ul>
    </li><li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">fonts</span>
      <ul>
        <li>
          <img src="/img/zip.svg" alt="Font File" class="tree-icon icon-ttf">
          <span class="file ttf">Font<span class="file-extension">.ttf</span></span>
        </li>
        <li>
          <img src="/img/zip.svg" alt="Font File" class="tree-icon icon-ttf">
          <span class="file ttf">...</span>
        </li>
      </ul>
    </li>
  </ul>
</div>
:::

Backup file name prefixes are unique for the app to avoid potential collisions between forks.

## Migrating from v0.14.x or earlier

If you were using the default locations before, then simply select the existing `Aniyomi` folder.

::: warning
If you have an existing `downloads` folder, you should be selecting its parent folder (if applicable; avoid choosing the root of your storage) or you should move your downloads to a new location.

Note the illustrated example above where `downloads` is a folder _within_ the location being set, and the individual source folders are _within_ that `downloads` folder.
:::

If you need to change your storage location or have moved files around from outside the app, you may need to force the app to recheck for the files by going to <nav to="advanced"> then **Invalidate downloads index**.

# Scoped Storage

Since Android 11, most apps are enforced to use [Scoped Storage](https://developer.android.com/about/versions/11/privacy/storage) for better security for users so that apps cannot read everything on the device.

**Scoped Storage**'s introduction affects various storage-related functions in **Aniyomi**.
These functions may become slower due to **Scoped Storage**'s inherent latency, as discussed in detail [here](https://www.xda-developers.com/android-q-storage-access-framework-scoped-storage/).

This can impact tasks like deleting chapters, library loading times, accessing local files like downloads or the local source, and more. As always, using internal storage is recommended over SD cards if latency is of concern.

<style scoped>
  @import "../../.vitepress/theme/styles/tree.styl"
</style>
