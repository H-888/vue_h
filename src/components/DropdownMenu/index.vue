<template>
   <van-dropdown-menu>
     <van-dropdown-item v-model="value1" :options="option1" />
     <van-dropdown-item v-model="value2" :options="option2" />
     <van-dropdown-item v-model="value3" :options="option3" />
   </van-dropdown-menu>
</template>
<script>
	import {mapState} from "vuex"
export default {
	name:"DropdownMenu",
  data() {
      return {
        value1: 1,
        value2: 0,
		value3: 0,
        option1: [],
        option2: [],
		option3: [],
      };
  },
methods:{

},
   mounted() {
	   this.option1 = []
	  this.cinema.data.brand.subItems.forEach((item,index)=>{
		  this.option2.push({
			  text:item.name,
			  value:index
		  }) 
	  })
	  let num = 0
	  this.cinema.data.subway.subItems.forEach((item,index)=>{
			 item.subItems.forEach((item,index)=>{
				 this.option1.push({
				 			  text:item.name,
				 			  value:num
				 })
				  num++;
			 }) 
	  })
	  this.cinema.data.timeRanges.subItems.forEach((item,index)=>{
	  		  this.option3.push({
	  		  			  text:item.name,
	  		  			  value:index
	  		  }) 
	  })
	  
   },
   updated(){
	    
   },
   computed:mapState("cinema",["cinema"])
}
</script>
<style scoped>
</style>