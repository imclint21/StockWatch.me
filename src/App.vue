<template>
	<div id="app">
		<Banner />
		<Header />
<!--		<br />-->
		<b-container fluid>
			<Welcome />
			<Featured />
			<StockTable />
		</b-container>
		<Footer />
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
	</div>
</template>

<script>
import Header from './sections/Header'
import Banner from "./sections/Banner";
import StockTable from "@/sections/StockTable";
import Featured from "@/sections/Featured";
import Welcome from "@/sections/Welcome";
import Footer from "@/sections/Footer";

export default {
	name: 'App',
	components: {
		Footer,
		Featured,
		StockTable,
		Banner,
		Header,
		Welcome
	}
}
</script>

<style>
#app
{
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

	/*background-image: url("./assets/background.png");*/
	/*background-size: 3400px 900px;*/
	/*background-position-x: center;*/
	/*background-position-y: 155px;*/
	/*background-repeat: no-repeat;*/
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
