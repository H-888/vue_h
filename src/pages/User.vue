<template>
  <div>
	   <van-skeleton title :row="10" />
	   <van-button type="info" @click="logout">注销</van-button>
  </div>
</template>
<script>
export default {
	name:"User",
   data() {
      return {

      }
   },
methods:{
	logout(){
		localStorage.removeItem("user")
		this.$router.push("/login")
	}
},
   mounted() {
	   this.$root.headTitle.text = "个人中心"
   }
}
</script>
<style scoped>
	
</style>