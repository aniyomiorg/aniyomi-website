<script setup lang="ts">
defineProps<{ link: string }>()
</script>

<template>
  <a :href="link" target="_blank" class="mpv-link">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M660-160h40v-160h-40zm20-200q8 0 14-6t6-14-6-14-14-6-14 6-6 14 6 14 14 6M200-800v640zv200zm80 400h147q11-23 25.5-43t32.5-37H280zm0 160h123q-3-20-3-40t3-40H280zM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-19-6-39-9t-41-3v-40H480v-200H200v640h227q11 23 25.5 43T485-80zm480-400q83 0 141.5 58.5T880-280t-58.5 141.5T680-80t-141.5-58.5T480-280t58.5-141.5T680-480" fill="var(--vp-c-brand-1)" />
    </svg>
  </a>
</template>

<style scoped lang="stylus">
.mpv-link {
  vertical-align: middle
  position: relative
  display: inline-block
}
</style>
