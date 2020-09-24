<template>
	<div class="movie_menu">

		<router-link active-class="home_nav_active" to="/city">
			<div class="city_name">
				<span>{{UPDATE_CITY ? UPDATE_CITY : text}}</span><i class="iconfont icon-lower-triangle"></i>
			</div>
		</router-link>

		<div class="hot_swtich">
			<router-link active-class="home_nav_active" to="nowshow">
				<div class="hot_item">正在热映</div>
			</router-link>
			<router-link active-class="home_nav_active" to="comingShow">
				<div class="hot_item">即将上映</div>
			</router-link>
		</div>

		<router-link active-class="home_nav_active" to="search">
			<div class="search_entry active">
				<i class="iconfont icon-sousuo"></i>
			</div>
		</router-link>

	</div>
</template>
<script>
	import {mapGetters} from "vuex";
	export default {
		name: "Nav",
		data() {
			return {
				text: "北京市"
			}
		},
		methods: {

		},
		mounted() {
			this.$store.dispatch("city/UPDATE_CITY",2)
		},
		computed:mapGetters("city",["UPDATE_CITY"])
	}
</script>
<style scoped>
	.movie_menu {
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #e6e6e6;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		z-index: 10;
	}

	.movie_menu .city_name {
		margin-left: 20px;
		height: 100%;
		line-height: 45px;
		color: #000000;
	}

	.movie_menu .hot_swtich {
		display: flex;
		height: 100%;
		line-height: 45px;
	}

	.movie_menu .hot_item {
		font-size: 15px;
		color: #666;
		width: 80px;
		text-align: center;
		margin: 0 12px;
		font-weight: 700;
	}

	.movie_menu .search_entry {
		margin-right: 20px;
		height: 100%;
		line-height: 45px;
	}

	.movie_menu .search_entry i {
		font-size: 24px;
		color: red;
	}

	.home_nav_active {
		color: #ef4238;
		border-bottom: 2px #ef4238 solid;
	}
</style>
