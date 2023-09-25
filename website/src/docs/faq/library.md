---
title: Library
titleTemplate: Frequently Asked Questions
description: Frequently Asked Questions about the Library.
---

# Library
Frequently Asked Questions about the Library.

## Why is Global Update skipping entries?
The app's default behavior is to skip updates for entries that meet the following criteria:

* Have unwatched episodes/unread chapters
* Haven't been initiated
* Carry a "**Completed**" status

This strategy prevents unnecessary load which may lead to sources implementing measures against **Aniyomi**.
To manage entries with infrequent or no updates, consider using categories and excluding them from updates.

We recommend using the default settings and prioritizing unwatched episodes for watching and unread episodes for reading.

If you wish to disable the notification about skipped items, you can do so at <nav to="advanced"> and then **Manage notifications** (doing so requires Android 8 or above).

## Why am I warned about large bulk updates and downloads?
Excessive server load may trigger anti-**Aniyomi** measures from sources. See the previous question for more context. Long-running update checks and downloads may also impact your device's battery life.

To mitigate these concerns:

* Use categories to segment your library ("Watching", "Plan to Watch", "Completed", etc.).
* Update only the "Watching" category by navigating to <nav to="library">, then tap **Categories** under **Global update**.
* If the warning persists, create a new category for infrequently updated entries (like monthly series or those on hiatus) and set global updates to target the more frequently updated "watching" category.

## Why aren't library updates working?
Some Android skins (e.g., **MIUI**) aggressively save battery, potentially shutting down apps in the background.

Whitelist **Aniyomi** from your battery saver by going to <nav to="advanced"> and tapping **Disable battery optimization**.

If unsuccessful, refer to [Don't Kill My App](https://dontkillmyapp.com/) for how to disable specific battery-saving options for your device.

## How can I see the number of downloaded episodes/chapters?
Badges can be enabled by navigating to <nav to="main_library">, then going to **Filter** and clicking the **Display** tab.
Then, at the bottom, select **Download badges**.

## Can I sync between multiple devices?
**Aniyomi** can't sync between devices.
Use its [backup and restore](/docs/guides/backups) features, including [auto backups](/docs/guides/backups#enabling-automatic-backups), for series database and content migration to another device.

## How can I ignore duplicate episodes?
Dealing with series translated by multiple groups that result in duplicate episode releases?

Bookmark or mark as watched the undesired episodes, then open the **Filter** menu, ensure you're on the **Filter** tab, then double-tap **Bookmarked** or single-tap **Unwatched**.

This hides bookmarked or watched episodes, enabling you to skip them as you watch.
Ensure [Skip filtered episodes](/docs/guides/reader-settings#skip-filtered-episodes) is enabled at <nav to="reader"> under the section **Watching**.

Alternatively, migrate to a source without duplicates.
Refer to the [migration guide](/docs/guides/source-migration) for detailed instructions.

## Why are some cover thumbnails corrupted or blank?
If cover thumbnails appear corrupted, blank, or broken, it's likely due to an incomplete download. Fix this by refreshing the covers in settings.

Refresh your covers at <nav to="advanced"> then tap **Refresh library covers**.

## Why have some episodes been marked as unwatched?
If certain series episodes are marked as unwatched without your interaction, it could be due to changed URLs.
**Aniyomi** detects these changes and interprets the episodes as new.

## How do I pause watching history?
Disable **Incognito Mode** through <nav to="incognito-mode">.

## How do I only read downloaded episodes?
Enable **Download only** via <nav to="downloaded-only">.

## Why can't I disable the Downloaded filter?
Disable **Download only** via <nav to="downloaded-only">.
