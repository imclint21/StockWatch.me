<template>
	<b-navbar toggleable="lg" class="border-bottom" :type="this.darkMode ? 'dark' : 'light'" :variant="this.darkMode ? 'dark' : 'white'">
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
}

.bg-dark
{
	background-color: #27282d !important;
}

.navbar-dark
{
	/*background-color: var(--accent) !important;*/
	background-image: linear-gradient(-45deg, #517FE5 0%, #3B6EDD 100%);
}

.navbar-dark.border-bottom
{
	border-bottom-width: 0 !important;
}

.navbar-light.border-bottom {
	border-bottom: 1px solid #f6f6f6 !important;
}

.navbar-dark .navbar-nav .nav-link
{
	color: white;
}

.navbar > div > ul:nth-child(1) > li > a
{
	padding-left: 0;
}

/*.navbar-nav .nav-link*/
/*{*/
/*	color: white !important;*/
/*}*/


</style>