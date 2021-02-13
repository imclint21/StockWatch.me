<template>
	<b-nav class="ml-auto d-none d-lg-flex" small fill pills>
		<div class="d-flex">
			<b-nav-item class="right-divider" active>
				<vue-feather type="star" size="15" class="mr-1" style="vertical-align: sub;" />
				Featured Shares
			</b-nav-item>
			<b-nav-item active>S&amp;P 500</b-nav-item>
			<b-nav-item>Nasdaq</b-nav-item>
			<b-nav-item>Dow Jones</b-nav-item>
			<b-nav-item>CAC 40</b-nav-item>
			<b-nav-item>OMX 30</b-nav-item>
			<b-nav-item>FTSE</b-nav-item>
		</div>
		<div class="d-flex ml-auto">
			<b-nav-item-dropdown class="light" text="View 100">
				<b-dropdown-item>100</b-dropdown-item>
				<b-dropdown-item>200</b-dropdown-item>
				<b-dropdown-item>500</b-dropdown-item>
				<b-dropdown-item>300</b-dropdown-item>
				<b-dropdown-item>1000</b-dropdown-item>
<!--				<b-dropdown-divider></b-dropdown-divider>-->
<!--				<b-dropdown-item>Three</b-dropdown-item>-->
			</b-nav-item-dropdown>
			<b-nav-item class="light ml-2">
				<vue-feather type="filter" size="15" class="mr-1" style="vertical-align: sub;" />
				Filters
			</b-nav-item>
		</div>
	</b-nav>
</template>

<script>
import VueFeather from "vue-feather";
export default {
	name: "FilterButtons",
	components: {
		VueFeather
	}
}
</script>

<style scoped>
.nav
{
	display: none !important;
}

.nav-link
{
	color: rgb(88, 102, 126);
	font-weight: 500;
}

.nav-link.active
{
	background-color: rgb(240, 246, 255) !important;
	color: #517FE5 !important;
}

.right-divider .nav-link
{
	margin-right: 20px;
}

.right-divider
{
	border-right: 1px solid rgb(236, 238, 241);
	margin-right: 20px;
}
</style>