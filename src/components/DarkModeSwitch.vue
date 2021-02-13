<template>
	<b-button @click="switchTheme" variant="link" pill class="ml-2 pr-2" aria-label="Toggle themes">
		<vue-feather type="moon" size="17" class="mr-1" style="vertical-align: sub;"></vue-feather>
	</b-button>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	name: "DarkModeSwitch",
	components: {
		VueFeather
	},
	methods: {
		switchTheme: function()
		{
			this.darkMode = !this.darkMode;
			localStorage.setItem("theme", this.darkMode ? "dark" : "light");
			document.documentElement.setAttribute("data-theme", this.darkMode ? "dark" : "light");
		}
	}
}
</script>

<style scoped>

</style>