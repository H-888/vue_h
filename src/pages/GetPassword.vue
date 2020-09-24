<template>
  
		<van-skeleton title avatar :row="3" :loading="loading">
		  <div>实际内容</div>
		</van-skeleton>

</template>
<script>
export default {
	name:"GetPassWord",
   data() {
      return {
		loading: true,
      }
   },
methods:{

},
   mounted(){
	   // this.loading = false;
	   this.$root.headTitle.text = "找回密码页"
   }
}
</script>
<style scoped>
</style>