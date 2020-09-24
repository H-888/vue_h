<template>
	<div v-if="detail.data" id="content" class="contentDetail">
		<div class="detail_list">
			<div class="detail_list_bg"></div>
			<div class="detail_list_filter"></div>
			<div class="detail_list_content">
				<div class="detail_list_img">
					<img :src="detail.data.data.img" alt="">
				</div>
				<div class="detail_list_info">
					<h2>{{detail.data.data.goodsName}}</h2>
					<p>{{detail.data.data.EnglishName}}</p>
					<p>{{detail.data.data.score}}</p>
					<p>{{detail.data.data.protagonist}}</p>
					<p>{{detail.data.data.time}}</p>
				</div>
			</div>
		</div>
		<div class="detail_intro">
			<p>{{detail.data.data.text}}</p>
			<van-button round type="info" @click="$router.push({
				path:'/cinema/'+detail.data.data.id
				})">优惠购票</van-button>
		</div>
		
	</div>
</template>
<script>
	import {UPDATE_DETAIL} from "../store/types.js"
import { mapGetters, mapActions, mapMutations, mapState,createNamespacedHelpers } from 'vuex'
	export default {
		name: "Detail",
		props: {
			id: {
				type: String,
				default: ""
			}
		},
		mounted() {
			console.log(this.id)
			this[UPDATE_DETAIL]({_id:this.id})
			this.$root.headTitle.text = "详情页",
			this.$root.headTitle.previous = true
		},
		methods:mapActions("detail",[UPDATE_DETAIL]),
		computed:mapState('detail',['detail']),
	}
</script>
<style scoped>
	.contentDetail {
		display: block;
		margin-bottom: 0;
	}

	.detail_list {
		height: 200px;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.detail_list .detail_list_bg {
		width: 100%;
		height: 100%;
		background: url(../assets/img/movie_1.jpg) 0 40%;
		filter: blur(20px);
		background-size: cover;
		position: absolute;
		left: 0;
		top: 0;
	}

	.detail_list .detail_list_filter {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #40454d;
		opacity: .55;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	.detail_list .detail_list_content {
		display: flex;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
	}

	.detail_list .detail_list_img {
		width: 108px;
		height: 150px;
		border: solid 1px #f0f2f3;
		margin: 20px;
	}

	.detail_list .detail_list_img img {
		width: 100%;
		height: 100%;
	}

	.detail_list .detail_list_info {
		margin-top: 20px;
	}

	.detail_list .detail_list_info h2 {
		font-size: 20px;
		color: white;
		font-weight: normal;
		line-height: 40px;
	}

	.detail_list .detail_list_info p {
		color: white;
		line-height: 20px;
		font-size: 14px;
		color: #ccc;
	}

	.detail_intro {
		padding: 10px;
	}

	.detail_player {
		margin: 20px;
	}

	.detail_player .swiper-slide {
		width: 70px;
		margin-right: 20px;
		text-align: center;
		font-size: 14px;
	}

	.detail_player .swiper-slide img {
		width: 100%;
		margin-bottom: 5px;
	}

	.detail_player .swiper-slide p:nth-of-type(2) {
		color: #999;
	}
</style>
