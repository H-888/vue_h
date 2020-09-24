<template>
	<div class="Home">
		<Nav></Nav>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
	</div>
</template>
<script>
	import Nav from "../components/Nav/index.vue"
	export default {
		name: "Home",
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			  Nav,
		},
		mounted() {
			 this.$root.headTitle.text = "首页";
			 this.$root.headTitle.previous = false;
		}
	}
</script>
<style scoped>
	
</style>
