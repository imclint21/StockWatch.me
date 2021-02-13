<template>
	<b-row>
		<hooper
			style="height: inherit;"
			:settings="hooperSettings">
			<slide>
				<b-col>
					<FeaturedCard title="Portfolio" description="Track your trades in one place, not all over the place" image="https://s2.coinmarketcap.com/static/cloud/img/banners/portfolio-block.png?_=419c992" />
				</b-col>
			</slide>
			<slide>
				<b-col>
					<FeaturedCard title="Portfolio" description="Track your trades in one place, not all over the place" image="https://s2.coinmarketcap.com/static/cloud/img/ckb_1inch_192x192.png?_=419c992" />
				</b-col>
			</slide>
			<slide>
				<b-col>
					<FeaturedCard title="Portfolio" description="Track your trades in one place, not all over the place" image="https://s2.coinmarketcap.com/static/cloud/img/nft.png?_=419c992" />
				</b-col>
			</slide>
			<slide>
				<b-col>
					<FeaturedCard title="Portfolio" description="Track your trades in one place, not all over the place" image="https://s2.coinmarketcap.com/static/cloud/img/banners/smiling-elon.png?_=419c992" />
				</b-col>
			</slide>
		</hooper>
	</b-row>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import FeaturedCard from "@/components/FeaturedCard";
export default {
	name: "Featured",
	components: {
		FeaturedCard,
		Hooper,
		Slide
	},
	data() {
		return {
			hooperSettings: {
				itemsToShow: 4,
				infiniteScroll: true,
				autoPlay: true,
				// centerMode: true,
				breakpoints: {
					300: {
						itemsToShow: 1
					},
					1200: {
						itemsToShow: 4
					}
				}
			}
		};
	}
}
</script>

<style scoped>
.row
{
	margin-bottom: 15px;
}

.card
{
	margin: 25px 0;
	border-radius: 15px;
}

.hooper {
	outline: none
}
</style>