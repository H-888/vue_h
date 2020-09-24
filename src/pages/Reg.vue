<template>
    <div id="content">
    	<div class="login_body">
    		<div>
    			<input v-model="username" class="login_text" type="text" placeHolder="账户名/手机号/Email">
    		</div>
    		<div>
    			<input v-model="password" class="login_text" type="password" placeHolder="请输入您的密码">
    		</div>
    		<div class="login_btn">
    			<input @click="reg" type="button" value="立即注册">
    		</div>
    	</div>
		<!-- 弹出层 -->
		<van-popup v-model="show">{{mess}}</van-popup>
    </div>
</template>
<script>
export default {
	name:"Reg",
   data() {
      return {
		username:"",
		password:"",
		mess:"",
		show: false,
      }
   },
methods:{
   reg(){
		this.$axios({
			url:"/api/reg",
			method:"post",
			data:{
				username:this.username,
				password:this.password
			}
		}).then(res=>{	
			this.mess = res.data.msg
			if(res.data.err === 0){
				this.$router.push("./login")
			}else{
				this.show = true;
			}
		})
	}
},
   mounted() {
	   this.$root.headTitle.text = "注册页";
	   this.$root.headTitle.previous = false;
   }
}
</script>
<style scoped>
	#content {
		flex: 1;
		overflow: auto;
		margin-bottom: 50px;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	#content .login_body {
		width: 100%;
	}

	.login_body .login_text {
		width: 100%;
		height: 40px;
		border: none;
		border-bottom: 1px #ccc solid;
		margin-bottom: 5px;
		outline: none;
		text-indent: 10px;
	}

	.login_body .login_btn {
		height: 50px;
		margin: 10px;
	}

	.login_body .login_btn input {
		width: 100%;
		height: 100%;
		background: #e54847;
		border-radius: 3px;
		border: none;
		display: block;
		color: white;
		font-size: 20px;
	}

</style>