---
标题：本地源
titleTemplate：参考线
描述：适用于希望下载和组织自己的媒体的用户。
---

#本地源

如果你喜欢下载和组织你的媒体，那么你想知道如何管理你自己的系列在阿尼约米。

**警告
本页将探索一些高级功能。
:::

##创建本地序列

1.在您指定为存储位置的位置(例如，`/Aniyomi/`)，应该有一个`当地的`文件夹。将结构正确的系列放入其中(例如`/Aniyomi/local/`).

    >如果在文件夹中添加系列，建议添加名为`.nomedia`复制到本地文件夹，以便图像不会显示在画廊中。

1.现在，您应该能够访问<NAV到="来源">在……下面**本地源**.

如果您添加了更多章节，则必须手动刷新章节列表(通过下拉该列表)。

Supported chapter formats are folders with pictures inside (such as `.jpg`, `.png`, etc) or archive files (`ZIP`/`CBZ`, `RAR`/`CBR`, and `EPUB`).
But expect better performance with directories and `ZIP`/`CBZ`.

Note that a single folder or archive file is treated as a single chapter. For example, Aniyomi will not automatically split an `EPUB` file containing multiple chapters into separate chapters within the app.

### Folder structure

Aniyomi requires a specific folder structure for local series to be correctly processed.
Local series will be read from the `local` folder.
Each series must have a `Series` folder and a `Chapter` folder.
Images will then go into the chapter folder.
See below for more information on archive files.
You can refer to the following example:

:::info Example
<div class="tree">
  <ul>
    <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
    <span class="folder root">[your storage location]/local</span>
    <li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">[the series title]</span>
      <ul>
        <li>
          <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
          <span class="file jpg">cover<span class="file-extension">.jpg</span></span>
        </li>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder">chapter_1</span>
          <ul>
            <li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
            <li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
          </ul>
        </li>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder">chapter_2</span>
          <ul>
            <li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
            <li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
          </ul>
        </li>
        <li>
          <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
          <span class="folder">chapter_n</span>
          <ul>
            <li><span class="file">image_1<span class="file-extension">.ext</span></span></li>
            <li><span class="file">image_n<span class="file-extension">.ext</span></span></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
:::

Aniyomi will see three chapters in a single series.
The path to the folder with images must contain both the series title and the chapter name (as seen above).

### Archive files

Archive files such as `ZIP`/`CBZ` are supported but the folder structure inside is not.
Any folders inside the archive file are ignored.
You must place the archive inside the `Series` folder where the name will become the `Chapter` title.
All images inside the archive regardless of folder structure will become pages for that chapter.

#### Example {#example-archives}

:::tabs
== .ZIP
<div class="tree">
  <ul>
    <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
    <span class="folder root">[your storage location]/local</span>
    <li>
      <img src="/img/folder.svg" alt="Folder" class="tree-icon icon-folder">
      <span class="folder main">[the series title]</span>
      <ul>
        <li>
          <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
          <span class="file jpg">cover<span class="file-extension">.jpg</span></span>
        </li>
        <li>
          <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-zip">
          <span class="file zip">chapter_1<span class="file-extension">.zip</span></span>
          <ul>
            <li>
              <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
              <span class="file jpg">image_1<span class="file-extension">.jpg</span></span>
            </li>
            <li>
              <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
              <span class="file jpg">image_n<span class="file-extension">.jpg</span></span>
            </li>
          </ul>
        </li>
        <li>
          <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-zip">
          <span class="file zip">chapter_2<span class="file-extension">.zip</span></span>
          <ul>
            <li>
              <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
              <span class="file jpg">image_1<span class="file-extension">.jpg</span></span>
            </li>
            <li>
              <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
              <span class="file jpg">image_n<span class="file-extension">.jpg</span></span>
            </li>
          </ul>
        </li>
        <li>
          <img src="/img/zip.svg" alt="Compressed File" class="tree-icon icon-zip">
          <span class="file zip">chapter_n<span class="file-extension">.zip</span></span>
          <ul>
            <li>
              <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
              <span class="file jpg">image_1<span class="file-extension">.jpg</span></span>
            </li>
            <li>
              <img src="/img/jpeg.svg" alt="File" class="tree-icon icon-jpeg">
              <span class="file jpg">image_n<span class="file-extension">.jpg</span></span>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
:::

<style scoped>
  @import "../../../.vitepress/theme/styles/tree.styl"
</style>
