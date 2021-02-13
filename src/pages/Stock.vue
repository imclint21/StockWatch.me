<template>
	<b-container class="px-0 py-5">
		<div class="tradingview-widget-container">
			<div id="tradingview_4ae30"></div>
		</div>
	</b-container>
</template>

<script>
export default {
	name: "Stock",
	mounted() {
		document.title = "StockWatch.me | Stock " + this.$route.params.ticker;
		// eslint-disable-next-line no-undef
		new TradingView.MediumWidget(
			{
				"symbols": [
					[
						this.$route.params.ticker
					]
				],
				"chartOnly": false,
				"width": "100%",
				"height": 400,
				"locale": "fr",
				"colorTheme": this.darkMode ? "dark" : "light",
				"gridLineColor": "#f0f3fa",
				"trendLineColor": "#2196f3",
				"fontColor": "#787b86",
				"underLineColor": "#e3f2fd",
				"isTransparent": true,
				"autosize": true,
				"container_id": "tradingview_4ae30"
			}
		);
	}
}
</script>

<style scoped>
</style>