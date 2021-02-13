<template>
	<div id="app" :class="this.darkMode ? 'bg-dark' : ''">
		<Banner />
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import Banner from "@/sections/Banner";
import Header from '@/sections/Header'
import Footer from "@/sections/Footer";

export default {
	name: 'App',
	components: {
		Banner,
		Header,
		Footer,
	}
}
</script>

<style>
#app
{
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	background-color: var(--bg-primary);

	/*background-image: url("./assets/background.png");*/
	/*background-size: 3400px 900px;*/
	/*background-position-x: center;*/
	/*background-position-y: 155px;*/
	/*background-repeat: no-repeat;*/
}

#app.bg-dark
{
	background-color: #27282d !important;
	color: white !important;
}

@media (min-width: 1200px)
{
	.container
	{
		min-width: 1277px;
	}

	.container-fluid
	{
		max-width: 1377px;
	}
}
</style>
