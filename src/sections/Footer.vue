<template>
	<footer :class="this.darkMode ? 'bg-dark' : 'bg-white'">
		<b-container class="d-none d-lg-block">
			<b-row>
				<b-col>
					<h5>Services</h5>
					<p><a href="">All our Services</a></p>
					<p><a href="">Service Status</a></p>
					<p><a href="">My Account</a></p>
					<p><a href="">Get Support</a></p>
				</b-col>
				<b-col>
					<h5>Useful Links</h5>
					<p><a href="">Privacy Policy</a></p>
					<p><a href="">Become Affiliate</a></p>
					<p><a href="">GitHub Repository</a></p>
					<p><a href="">See the Blog</a></p>
				</b-col>
				<b-col>
					<h5>Contact</h5>
					<p>
						<a href="">
							<feather type="mail" size="17" class="mr-1" style="vertical-align: sub;"></feather>
							contact@stockwatch.me
						</a>
					</p>
					<p>
						<a href="">
							<feather type="twitter" size="17" class="mr-1" style="vertical-align: sub;"></feather>
							stockwatch_me
						</a>
					</p>
					<p>
						<a href="">
							<feather type="triangle" size="17" class="mr-1" style="vertical-align: sub;"></feather>
							discord.gg/zA6PKqU
						</a>
					</p>
					<p>
						<a href="">
							<feather type="key" size="17" class="mr-1" style="vertical-align: sub;"></feather>
							PGP: F3383210
						</a>
					</p>
				</b-col>
				<b-col>
<!--					<h5>Contact</h5>-->
					<Logo :dark="this.darkMode" class="mb-3" />
					<p>Get in touch of releases and new seedstorm.io features by subscribing.</p>
					<p>J'aimerais bien que ce projet work.</p>
					<a href="" class="font-weight-bold accent">
						<feather type="globe" size="17" class="mr-1" style="vertical-align: sub;"></feather>
						https://stockwatch.me
					</a>
				</b-col>
			</b-row>
		</b-container>
		<div class="copyright">
			<b-container>
				<b-row>
					<b-col md="12" lg="8" class="text-lg-left text-center mb-3 mb-lg-0">
						Copyright &copy; {{ year }} StockWatch.me - All Rights Reserved -
						<a href="https://github.com/clintnetwork/StockWatch.me" target="_blank">
							<feather type="github" size="17" class="ml-1" style="vertical-align: sub;"></feather>
							GitHub
						</a>
					</b-col>
					<b-col class="d-none d-lg-block text-right" lg="4">
						<a href="https://github.com/clintnetwork/StockWatch.me/blob/master/LICENSE" target="_blank">License MIT</a>
						&bull; Crafted with ❤️ by <a href="https://github.com/clintnetwork">Clint.Network</a>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</footer>
</template>

<script>
import Logo from "@/components/Logo";
export default {
	name: "Footer",
	components: {Logo},
	data() {
		return {
			year: new Date().getFullYear()
		}
	}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap');

.border-top
{
	border-color: rgba(78, 124, 228, 0.12) !important;
}

footer
{
	margin-top: 100px;
	font-size: 16px;
}

footer.bg-dark
{
	background-color: #2d2e33 !important;
	color: white !important;
}

footer > .container
{
	padding-top: 80px;
	padding-bottom: 70px;
}

footer h5
{
	margin-bottom: 20px;
	font-size: 14pt;
}

footer a,
footer p
{
	color: rgb(42, 48, 57);
	font-weight: 400;
	font-size: 14px;
}

footer.bg-dark a,
footer.bg-dark p
{
	color: white !important;
}

footer a:hover
{
	text-decoration: none;
}

footer .copyright
{
	padding: 20px 0;
	font-size: 11pt;
}

footer.bg-dark .copyright
{
	background-color: #27282d !important;
}

footer .copyright p
{
	margin-bottom: 0;
}
</style>