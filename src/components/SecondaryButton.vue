<template>
	<b-button pill variant="outline-primary">
		<slot />
	</b-button>
</template>

<script>
export default {
	name: "SecondaryButton",
}
</script>

<style scoped>
.btn-outline-primary
{
	box-shadow: 0 3px 20px rgba(0, 0, 0, .07);
	border-color: #517FE5;
	color: #517FE5;
	padding-left: 30px !important;
	padding-right: 30px !important;
}

.btn-outline-primary:hover
{
	background-color: #517FE5;
}
</style>