<script setup lang="ts">
defineProps<{ title: string; color: string }>()
</script>

<template>
    <span class='color-tag'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="color"><rect width="24" height="24" rx="6"/>
        </svg>
        <span class="name">{{ title }}</span>
    </span> 
</template>

<style lang="stylus" scoped>
.color-tag {
	font-weight: 600
	margin-left: 6px

	svg,
	span.name {
		vertical-align: middle // Align both SVG and <span> vertically
		position: relative
		bottom: 1px
	}

	svg {
		height: 1em
		width: 1em
		display: inline-block
		margin-right: 4px
	}
}
</style>