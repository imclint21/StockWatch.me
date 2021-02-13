<!--suppress ALL -->
<template>
	<div>
		<b-row>
			<b-col class="pb-3">
				<FilterButtons />
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-card :bg-variant="this.darkMode ? 'dark' : ''">
					<b-table
						id="stocks"
						responsive="md"
						:per-page="perPage"
						:current-page="currentPage"
						:items="items"
						:fields="fields"
						sort-icon-left
						:dark="this.darkMode"
						striped>
						<template #head(id)="data">
							<div class="text-center">{{ data.label }}</div>
						</template>
						<template #head(progression)="data">
							<div class="text-right mr-3">{{ data.label }}</div>
						</template>
						<template #cell(name)="data">
							<b-media vertical-align="center">
								<template #aside>
									<b-img width="32" style="height: intrinsic; max-height: 32px;" :src="data.item.image" alt="btc" />
								</template>
								<a href="/" class="title m-0">
									{{ data.item.name }}
									<!--							<b-badge variant="success" class="ml-1 text-white">A</b-badge>-->
								</a>
								<p class="description font-weight-light small mb-0">{{ data.item.company }}</p>
							</b-media>
						</template>
						<template #cell(ticker)="data">
							<a href="" class="text-muted">
								{{ data.item.ticker }}
							</a>
						</template>
						<template #cell(price)="data">
							{{ data.item.price | numeral('$ 0.[00]') }}
						</template>
						<template #cell(daily)="data">
					<span :class="data.item.daily > 0 ? 'green' : 'red'">
						{{ Math.abs(data.item.daily) | numeral('0.[00] %') }}
					</span>
						</template>
						<template #cell(weekly)="data">
					<span :class="data.item.weekly > 0 ? 'green' : 'red'">
						{{ data.item.weekly | numeral('0.[00] %') }}
					</span>
						</template>
						<template #cell(marketcap)="data">
							{{ data.item.marketcap | numeral('$ 0,0') }}
						</template>
						<template #cell(progression)="data">
							<trend
								:data="data.item.progression"
								:gradient="['#16c784']"
								:radius="3"
								:stroke-width="3"
								:height="40"
								auto-draw
								smooth>
							</trend>
						</template>
					</b-table>
				</b-card>
			</b-col>
		</b-row>
		<b-row class="d-none">
			<b-col>
				<div class="d-flex justify-content-center mt-4">
					<b-pagination
						class="mx-auto shadow-sm border-0 customPagination"
						v-model="currentPage"
						:total-rows="items.length"
						:per-page="perPage"
					></b-pagination>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
// import  from "numeral";
import FilterButtons from "@/components/FilterButtons";

export default {
	name: "StockTable",
	components: {
		FilterButtons
	},
	methods: {
		random()
		{
			return Array.from({length: 25}, () => Math.floor(Math.random() * 10));
		}
	},
	data() {
		return {
			perPage: 100,
			currentPage: 1,
			fields: [
				{
					key: 'id',
					label: "#",
					tdClass: 'td-w-70'
				},
				{
					key: 'name',
					label: "Stock Name",
					sortable: true
				},
				{
					key: 'ticker',
					label: "Ticker",
					sortable: true
				},
				{
					key: 'price',
					label: "Last Price",
					sortable: true
				},
				{
					key: 'currency',
					label: "Currency",
					sortable: true
				},
				{
					key: 'daily',
					label: '24h +/-',
					sortable: true,
				},
				{
					key: 'weekly',
					label: '7d +/-',
					sortable: true,
				},
				{
					key: 'marketcap',
					label: 'Market Cap',
					sortable: true,
				},
				// {
				// 	key: 'volume',
				// 	label: 'Volume',
				// 	sortable: true,
				// },
				{
					key: 'progression',
					label: 'Last 7 Days Progression',
					tdClass: 'td-w-250'
				}
			],
			items: [
				{ isActive: true, id: 1, name: 'Apple', company: "Apple Inc.", image: "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png", ticker: "AAPL", currency: "USD", price: 129.92, daily: 0.028, weekly: 0.19, marketcap: 39320932032, progression: this.random() },
				{ isActive: false, id: 2, name: 'Microsoft', company: "Microsoft Corporation", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", ticker: "MSFT", currency: "USD", price: 242.21, daily: -0.054, weekly: 0.362, marketcap: 39320932032, progression: this.random() },
				{ isActive: false, id: 3, name: 'Tesla', company: "Tesla, Inc.", image: "https://s2.coinmarketcap.com/static/img/coins/64x64/8417.png", ticker: "TSLA", currency: "USD", price: 840.28, daily: 0.032, weekly: 0.127, marketcap: 39320932032, progression: this.random() },
				{ isActive: true, id: 4, name: 'Fastly', company: "Fastly, Inc.", image: "https://pantheon.io/sites/default/files/field/image/16fa93ff622b79f90cff9f5d32abaceaa40289f6.png", ticker: "FSLY", currency: "USD", price: 82.2, daily: 0.0140, weekly: 0.192, marketcap: 39320932032, progression: this.random() },
				{ isActive: true, id: 5, name: 'Roku', company: "Roku, Inc.", image: "https://image.roku.com/bWFya2V0aW5n/roku-logo.png", ticker: "ROKU", currency: "USD", price: 82.2, daily: 0.094, weekly: 0.532, marketcap: 39320932032, progression: this.random() },
				{ isActive: true, id: 6, name: 'DocuSign', company: "DocuSign, Inc.", image: "https://www.docusign.fr/themes/custom/cubic/assets/images/logos/docusign_square_logo_white_on_black_rgb.png", ticker: "DOCU", currency: "USD", price: 82.2, daily: -0.0059, weekly: 0.149, marketcap: 39320932032, progression: this.random() },
				{ isActive: true, id: 7, name: 'NetEase', company: "NetEase, Inc.", image: "https://s3-symbol-logo.tradingview.com/netease--600.png", ticker: "NTES", currency: "USD", price: 82.2, daily: 0.039, weekly: 0.0532, marketcap: 39320932032, progression: this.random() }
			]
		}
	}
}
</script>
<style scoped>
.card
{
	box-shadow: 0 0 100px rgba(238, 238, 238, .7);
	border: 0;
	padding-top: 5px;
	border-radius: 0px;
}

.card.bg-dark
{
	box-shadow: 0 0 100px rgba(45, 46, 51, .7);
	background-color: #2d2e33 !important;
}

.card-body
{
	padding: 0;
}

a
{
	color: var(--accent);
	font-weight: 500;
}

.green
{
	color: #16c784;
	font-weight: 500;
}

.red
{
	color: #ea3943;
	font-weight: 500;
}

.green:before,
.red:before
{
	display: inline-block;
	margin-right: 5px;
	content: "";
	border-top: 0.3em solid;
	border-right: 0.3em solid transparent;
	border-bottom: 0;
	border-left: 0.3em solid transparent;
}

.customPagination > li > a {
	color: red;
}

.customPagination > li.active > a,
.customPagination > li > a:hover
{
	color: white;
	background-color: green!important;
}
</style>