<template>
	<b-button @click="switchTheme" variant="link">
		<vue-feather type="moon" size="17" style="vertical-align: sub;"></vue-feather>
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