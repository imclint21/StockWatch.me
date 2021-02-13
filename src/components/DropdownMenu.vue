<template>
	<b-nav-item-dropdown
		@mouseover.native="onOver"
		@mouseleave.native="onLeave"
		ref="dropdown"
		:text="title">
		<slot />
	</b-nav-item-dropdown>
</template>

<script>
export default {
	name: "DropdownMenu",
	methods: {
		onOver() {
			this.$refs.dropdown.visible = true;
		},
		onLeave() {
			this.$refs.dropdown.visible = false;
		}
	},
	props: {
		title: null
	}
}
</script>

<style scoped>
</style>