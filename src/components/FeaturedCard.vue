<template>
	<b-card bg-variant="dark">
		<b-media vertical-align="center">
			<template #aside>
				<b-img width="64" height="64" :src="image" alt="Media Aside" />
			</template>
			<p class="title small mb-0">{{ title }}</p>
			<p class="description mb-0">{{ description }}</p>
		</b-media>
	</b-card>
</template>

<script>
export default {
	name: "FeaturedCard",
	props: {
		image: null,
		title: null,
		description: null
	}
}
</script>

<style scoped>
.card
{
	box-shadow: 0 3px 20px rgba(0, 0, 0, .03);
	border-radius: 7px;
	border: 0 none;
}

.card.bg-dark
{
	background-color: #2d2e33 !important;
}

.title
{
	color: #777777;
	font-weight: 500;
}

.description
{
	font-size: 10pt;
	font-weight: 500;
	max-lines: 2;
}

img
{
	border-radius: 20px;
}
</style>