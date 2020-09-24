<template>
	<div id="app">
		<Loading v-show ="$root.boolLoading"></Loading>
		<Header :headTitle="$root.headTitle"></Header>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "./Header/index.vue"
	import Footer from "./Footer/index.vue"
	import Loading from "../components/Loading/index.vue"
	export default {
		name: 'App',
		data() {
			return {
				
			}
		},
		components: {
			Header,Footer,Loading
		},
		methods: {

		},
		mounted(){
			
		}
	}
</script>


