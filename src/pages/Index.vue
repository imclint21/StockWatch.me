<template>
	<b-container fluid>
		<Welcome />
		<Featured />
		<StockTable />
	</b-container>
</template>

<script>
import Welcome from "@/sections/Welcome";
import Featured from "@/sections/Featured";
import StockTable from "@/sections/StockTable";

export default {
	name: "Index",
	components: {
		StockTable,
		Featured,
		Welcome
	}
}
</script>

<style scoped>

</style>