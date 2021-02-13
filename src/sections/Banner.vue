<template>
	<b-navbar toggleable="lg" type="dark" variant="info">
		<b-container class="p-0">
			<b-navbar-nav>
				<b-nav-item class="text-center text-lg-left">StockWatch.me provides the latest stock market, financial and business news.</b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav class="d-none d-lg-flex">
				<b-nav-item href="#">Developer Documentation</b-nav-item>
				<b-nav-item href="#">Help</b-nav-item>
				<b-nav-item href="#">Login</b-nav-item>
			</b-navbar-nav>
		</b-container>
	</b-navbar>
</template>

<script>
export default {
	name: "Banner"
}
</script>

<style scoped>
.navbar
{
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	font-size: 10px;
	line-height: 1.5;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	font-weight: 500;

	min-height: 50px;
	/*background-color: rgb(36, 120, 204);*/
	/*background-image: linear-gradient(-47deg, rgb(33, 190, 185) 0%, rgb(51, 95, 198) 100%);*/
	background-image: linear-gradient(-45deg, #517FE5 0%, #3B6EDD 100%);
}

.navbar > div > ul:nth-child(1) > li > a
{
	padding-left: 0;
}

.navbar-nav .nav-link
{
	color: white !important;
}

</style>