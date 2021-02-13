<template>
	<b-button pill variant="primary">
		<slot />
	</b-button>
</template>

<script>
export default {
}
</script>

<style scoped>
.btn-primary
{
	/*background-image: linear-gradient(45deg, #517FE5 0%, #3B6EDD 100%) !important;*/
	background-color: var(--accent) !important;
	border-color: var(--accent) !important;
	box-shadow: 0 3px 20px rgba(0, 0, 0, .07);
	padding-left: 30px !important;
	padding-right: 30px !important;
}
</style>