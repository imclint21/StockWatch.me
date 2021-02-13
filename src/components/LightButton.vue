<template>
	<b-button size="small" variant="light" class="px-3">
		<slot />
	</b-button>
</template>

<script>
export default {
	name: "LightButton"
}
</script>

<style scoped>
.btn
{
	background-color: rgb(240, 246, 255);
	color: #517FE5;
	font-size: 10pt;
	font-weight: 500;
}
</style>