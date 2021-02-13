<template>
	<b-button variant="link" class="text-link pr-0 ml-2" pill>
		<vue-feather type="moon" size="17" class="mr-1" style="vertical-align: sub;"></vue-feather>
	</b-button>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	name: "DarkModeSwitch",
	components: {
		VueFeather
	}
}
</script>

<style scoped>

</style>