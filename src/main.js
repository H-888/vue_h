import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

// 引入路由配置
import  router from "./plugins/router.js"

import "./assets/css/defaultStyles.css"
import "./assets/css/iconfont/iconfont.css"

// 导入vant组件
import Vant from 'vant';
import './assets/css/vant.css'
Vue.use(Vant);

// 引入axios拦截器
import "./plugins/axios.js"

// 引入状态管理
import store from "./plugins/vuex.js"

let vm = new Vue({
  render: h => h(App),
  router,
  store,
  data:{
	  headTitle:{
		text:"头部标题",
		previous:false
	  },
	  boolLoading:false
  }
}).$mount('#app')

export default vm;
