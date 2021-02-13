<template>
	<footer class="bg-white border-top">
		<b-container class="d-none  d-lg-block">
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
							contact@seedstorm.io
						</a>
					</p>
					<p>
						<a href="">
							<feather type="twitter" size="17" class="mr-1" style="vertical-align: sub;"></feather>
							seedstorm_io
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
					<img src="../assets/logo.png" class="mb-3" alt="logo" />
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
					<b-col md="12" lg="9" class="text-lg-left text-center mb-3 mb-lg-0">
						Copyright &copy; 2021 StockWatch.me - All Rights Reserved - Source on GitHub
					</b-col>
					<b-col class="d-none d-lg-block" lg="3">
						License MIT • Hosted on Windows Azure
					</b-col>
				</b-row>
			</b-container>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
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
	margin-top: 70px;
	font-size: 16px;
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

footer a:hover
{
	text-decoration: none;
}

footer .copyright
{
	padding: 20px 0;
	font-size: 11pt;
}

footer .copyright p
{
	margin-bottom: 0;
}
</style>