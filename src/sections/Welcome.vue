<template>
	<div id="welcome" class="text-center">
		<h1>
			Welcome to StockWatch<span class="accent">.me</span>
<!--			<vue-typer-->
<!--				text="Welcome to StockWatch.me"-->
<!--				:repeat="0"-->
<!--				:typeDelay="70"-->
<!--			></vue-typer>-->
		</h1>
		<p class="lead">
			We provide real time US stock market informations.
<!--			<vue-typer text="We provide real time US stock market informations."></vue-typer>-->
		</p>
	</div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
	name: "Welcome",
	comments: {
		// VueTyper
		'vue-typer': VueTyper
	}
}
</script>

<style scoped>
#welcome
{
	padding: 70px 0 30px;
	font-family: "Nunito", sans-serif;
}

h1
{
	font-weight: 700;
}

p.lead
{
	color: #777777;
	font-weight: 300;
}


@media (max-width: 1200px)
{
	#welcome
	{
		padding: 40px 0 0;
	}

	h1
	{
		font-size: 18pt;
	}

	p
	{
		font-size: 12pt;
	}
}
</style>