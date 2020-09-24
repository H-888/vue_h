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
				<input @click="login" type="button" value="登录">
			</div>
			<div class="login_link">
				<a href="#" @click="reg">立即注册</a>
				<a href="#" @click="getPwd">找回密码</a>
			</div>
		</div>
		<!-- 弹出层 -->
		<van-popup v-model="show">{{mess}}</van-popup>
	</div>
	
</template>
<script>
	export default {
		name: "Login",
		props: {

		},
		data() {
			return {
				username: "",
				password: "",
				mess: "",
				show: false,

			}
		},
		methods: {
			reg() {
				this.$router.push("/reg")
			},
			getPwd() {
				this.$router.push("/getPassword")
			},
			login() {
				this.$axios({
					url: "/api/login",
					method: "post",
					data: {
						username: this.username,
						password: this.password
					}
				}).then(res => {
					if (res.data.err === 0) {
						// 种local 跳转到之前
						window.localStorage.setItem('user', JSON.stringify(res.data));
						if (!this.$route.query.p) {
							this.$router.push("user")
						} else {
							this.$router.push(this.$route.query.p)
						}
					} else {
						this.mess = res.data.msg
						this.showPopup()
					}
				})
			},
			//展示弹出
			 showPopup() {
			      this.show = true;
			    },
		},
		// 组件路由前置守卫 
		beforeRouteEnter(to, from, next) {

			let user = window.localStorage.getItem('user');
			
			if (user) { //判断如果token存在  可以进入个人中心 否则 跳转登录
				next("/user")
			} else {
				next()
			}

		},
		mounted() {
			this.$root.headTitle.text = "登录页";
			this.$root.headTitle.previous = false;
			let user = window.localStorage.getItem('user');

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

	.login_body .login_link {
		display: flex;
		justify-content: space-between;
	}

	.login_body .login_link a {
		text-decoration: none;
		margin: 0 5px;
		font-size: 12px;
		color: #e54847;
	}
</style>
