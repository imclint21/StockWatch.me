<template>
	<svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: bottom;" xmlns:xlink="http://www.w3.org/1999/xlink" :height="height" viewBox="0 0 235 36">
		<defs>
			<pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 96 96">
				<image width="96" height="96" xlink:href="data:image/png;base64,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"/>
			</pattern>
		</defs>
		<text id="StockWatch.me" transform="translate(45 27)" fill="#517fe5" font-size="26" font-family="Nunito-Bold, Nunito" font-weight="700" letter-spacing="-0.001em"><tspan x="0" y="0" fill="#000">StockWatch</tspan><tspan y="0" fill="#517fe5">.me</tspan></text>
		<rect id="icons8-haussier-96" width="36" height="36" fill="url(#pattern)"/>
	</svg>
</template>

<script>
export default {
	name: "Logo",
	data: function () {
		return {
			height: 36
		}
	}
}
</script>

<style scoped>

</style>