<template>
	<div class="movie_body">
		<ul v-if="title !== 'search'">
			<li v-for="(item,index) of list" @click="detail(item.id)" :key = "index">
				<div class="pic_show"><img :src="item.img"></div>
				<div class="info_list">
					<h2>{{item.goodsName}}</h2>
					<p>观众评 <span class="grade">{{item.score}}</span></p>
					<p>主演:{{item.protagonist}}</p>
					<p>{{item.showInfo}}</p>
				</div>
				<div class="btn_mall" :style=" btnValue === '购票' ? 'background-color:#EF4238;' : 'background-color: #007AFF;' ">
					{{btnValue}}
				</div>
			</li>
		</ul>
		<ul v-else>
			<li v-for="(item,index) of list" :key= "index">
				<div class="img"><img src="../../assets/img/movie_1.jpg"></div>
				<div class="info">
					<p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
					<p>{{item.dir}}</p>
					<p>{{item.cat}}</p>
					<p>{{item.pubDesc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "Cell",
		props: {
			btnValue: {
				type: String,
				default: "购票",
			},
			title:{
				type:String,
				default:""
			},
			list:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		data() {
			return {

			}
		},
		methods: {
			detail(id) {
				console.log(id)
				this.$router.push({
					path:"/detail/"+ id,
					query:{
						txt:"文章"
					}
				})
			}
		},
		beforeMount(){
		},
		mounted() {
		},
		updated(){
			console.log(3,this.list)
		}
	}
</script>
<style scoped>
	.movie_body {
		flex: 1;
		overflow: auto;
	}

	.movie_body ul {
		margin: 0 12px;
		overflow: hidden;
	}

	.movie_body ul li {
		margin-top: 12px;
		display: flex;
		align-items: center;
		border-bottom: 1px #e6e6e6 solid;
		padding-bottom: 10px;
	}

	.movie_body .pic_show {
		width: 64px;
		height: 90px;
	}

	.movie_body .pic_show img {
		width: 100%;
	}

	.movie_body .info_list {
		margin-left: 10px;
		flex: 1;
		position: relative;
	}

	.movie_body .info_list h2 {
		font-size: 17px;
		line-height: 24px;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.movie_body .info_list p {
		font-size: 13px;
		color: #666;
		line-height: 22px;
		width: 200px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.movie_body .info_list .grade {
		font-weight: 700;
		color: #faaf00;
		font-size: 15px;
	}

	.movie_body .info_list img {
		width: 50px;
		position: absolute;
		right: 10px;
		top: 5px;
	}

	.movie_body .btn_mall,
	.movie_body .btn_pre {
		width: 47px;
		height: 27px;
		line-height: 28px;
		text-align: center;
		color: #fff;
		border-radius: 4px;
		font-size: 12px;
		cursor: pointer;
	}

	.movie_body .btn_pre {
		background-color: #3c9fe6;
	}
</style>
