<template>
	<van-area
	ref= "van"
	 title="定位" 
	 :area-list="areaList"
	  :columns-placeholder="['请选择', '请选择', '请选择']"
	 @confirm='showPopup'
	 @change="change"
			/>
</template>
<script>
	import List from "./city.js";
	import {UPDATE_CITY} from "../../store/types.js"
	export default {
		name: "City",
		data() {
			return {
				areaList: List,
				
			}
		},
		methods: {
			showPopup() {
			let cityDate = this.$refs.van.getArea()
			if(cityDate.county.length > 0){
				this.$store.commit("city/UPDATE_CITY",cityDate.county)
			}else if(cityDate.city.length > 0){
				this.$store.commit("city/UPDATE_CITY",cityDate.city)
			}else{
				this.$store.commit("city/UPDATE_CITY",cityDate.province)
			}
			this.$router.push("/nowshow")
			},
			change(){
				
			
		
			}
		},
		mounted() {

		},

	}
</script>
<style scoped>


</style>
