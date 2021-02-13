<template>
	<b-navbar toggleable="lg" :type="this.darkMode ? 'dark' : 'light'" :variant="this.darkMode ? 'dark' : 'white'" class="border-bottom" sticky>
		<b-container class="py-0 py-lg-4 px-0">
			<b-navbar-brand>
				<router-link to="/" class="inherit">
					<Logo :dark="this.darkMode" />
				</router-link>
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" class="mt-3 mt-lg-0" is-nav>
				<b-navbar-nav class="mx-auto">
					<DropdownMenu title="Stock Market">
						<b-dropdown-item href="#">Why Contentful?</b-dropdown-item>
						<b-dropdown-item href="#">Compare Headless CMS</b-dropdown-item>
						<b-dropdown-item href="#">Content Platform</b-dropdown-item>
						<b-dropdown-item href="#">Features</b-dropdown-item>
						<b-dropdown-item href="#">For Enterprise</b-dropdown-item>
						<b-dropdown-item href="#">App Framework</b-dropdown-item>
					</DropdownMenu>
					<DropdownMenu title="Best Brokers">
						<b-dropdown-item href="#">EN</b-dropdown-item>
					</DropdownMenu>
					<DropdownMenu title="API Documentation">
						<b-dropdown-item href="#">EN</b-dropdown-item>
					</DropdownMenu>
					<DropdownMenu title="Resources">
						<b-dropdown-item href="#">EN</b-dropdown-item>
					</DropdownMenu>
				</b-navbar-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-form class="mx-auto mx-lg-0 my-3 my-lg-0">
						<AboutButton>
							<vue-feather type="info" size="17" class="mr-1" style="vertical-align: sub;"></vue-feather>
							About Us
						</AboutButton>
						<PrimaryButton class="ml-3">
							<vue-feather type="rss" size="17" class="mr-1" style="vertical-align: sub;"></vue-feather>
							Subscribe
						</PrimaryButton>
						<DarkModeSwitch />
					</b-nav-form>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
import Logo from '@/components/Logo';
import DropdownMenu from '@/components/DropdownMenu';
import PrimaryButton from '@/components/PrimaryButton';
import VueFeather from 'vue-feather';
import AboutButton from '@/components/AboutButton';
import DarkModeSwitch from '@/components/DarkModeSwitch';
export default {
	name: "Header",
	components: {
		DarkModeSwitch,
		AboutButton,
		PrimaryButton,
		DropdownMenu,
		Logo,
		VueFeather,
	},
	// mounted() {
	// 	// console.log(appTheme);
	// },
	// methods: {
	// 	actualTheme () {
	// 		return document.documentElement.getAttribute('data-theme');
	// 	}
	// }
}
</script>

<style scoped>
.navbar
{
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.navbar-dark .navbar-nav .nav-link
{
	color: white !important;
}

.bg-dark
{
	background-color: #2d2e33 !important;
}

.nav-item
{
	font-size: 14px;
	padding-left: 7px;
	padding-right: 7px;
	font-weight: 500;
}

.navbar-light.border-bottom
{
	border-color: rgba(78, 124, 228, 0.12) !important;
}

.navbar-dark.border-bottom
{
	border-bottom-width: 0 !important;
}

.navbar-expand .navbar-nav .nav-link
{
	color: rgb(255, 0, 0) !important;

}

.navbar-nav .nav-item .nav-link
{
	display: none;
	color: red !important;
}

.btn
{
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
	font-weight: 500;
	font-size: 14px;
	padding: 10px 18px;
	/*font-size: 5pt;*/
}

.btn-primary
{
	background: rgb(36, 120, 204);;
	border-color: rgb(36, 120, 204);;
}

.btn-outline-primary
{
	border-color: rgb(36, 120, 204);;
	color: rgb(36, 120, 204);;
}
</style>