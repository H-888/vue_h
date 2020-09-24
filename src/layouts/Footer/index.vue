<template>
	<div class="div">
		<footer id="footer">
			<ul>
				<li class="active" >
					<router-link class="footer_nav" to="/" exact-active-class="footer_nav_active">
						<i class="iconfont icon-dianying"></i>
						<p>电影</p>
					</router-link>
				</li>
		
				<li>
					<router-link class="footer_nav" to="/cinema/_id" active-class="footer_nav_active">
						<i class="iconfont icon-yingyuan"></i>
						<p>影院</p>
					</router-link>
				</li>
		
				<li>
					<router-link class="footer_nav" to="/login" active-class="footer_nav_active">
						<i class="iconfont icon-wode"></i>
						<p>我的</p>
					</router-link>
				</li>
			</ul>
		</footer>
	</div>
</template>
<script>
	export default {
		name: "Footer",
		data() {
			return {

			}
		},
		methods: {
		
		},
		components:{},
		mounted(){}
	}
</script>
<style scoped>
	.div{height: 50px;}
#footer{ width:100%; height:50px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
#footer ul{ display: flex; text-align: center; height:50px; align-items:center;}
#footer ul li{ flex:1; height:40px;}
#footer ul i{ font-size: 20px;}
#footer ul p{ font-size: 12px; line-height: 18px;}
.footer_nav{color: #000000;}
.footer_nav_active{color: red}
</style>
