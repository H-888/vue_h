<template>
	<div id="div">
		<header id="header">
				<h1 v-if="!headTitle.previous">{{headTitle.text}}</h1>
				
				
				<i v-if="headTitle.previous" class="iconfont icon-right" @click="previous"></i>
				<h1 v-if="headTitle.previous">{{headTitle.text}}</h1>
		</header>
	</div>
</template>
<script>
	export default {
		name: "Header",
		props: {
			headTitle: {
				type: Object,
				default: function() {
					return {
						text: "头部标题",
						previous: false
					}
				}
			}
		},
		data() {
			return {

			}
		},
		methods: {
			previous() {
				this.$router.go(-1)
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	#div{
		height: 50px;
	}
	#header {
		width: 100%;
		height: 50px;
		color: #fff;
		background: #e54847;
		border-bottom: 1px solid #e54847;
		position: relative;
		position: fixed;
		top: 0;
		z-index: 9999;
	}

	#header h1 {
		font-size: 18px;
		text-align: center;
		line-height: 50px;
		font-weight: normal;
	}

	#header i {
		position: absolute;
		left: 5px;
		top: 50%;
		margin-top: -13px;
		font-size: 26px;
	}
</style>
