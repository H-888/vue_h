import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


// 首页组件
import Home from "../pages/Home.vue"
import City from "../components/City/index.vue"
import ComingShow from "../components/ComingShow/index.vue"
import NowShow from "../components/NowShow/index.vue"
import Search from "../components/Search/index.vue"
import Detail from "../pages/Detail.vue"
// 影院组件
import Cinema from "../pages/Cinema.vue"

// 我的组件
import Login from "../pages/Login.vue"
import Reg from "../pages/Reg.vue"
import GetPassWord from "../pages/GetPassword.vue"
import User from "../pages/User.vue"

let routes = [{
		path: '/',
		component: Home,
		children: [{
				path: 'City',
				component: City
			},
			{
				path: 'comingShow',
				component: ComingShow
			},
			{
				path: '/nowshow',
				component: NowShow
			},
			{
				path: 'search',
				component: Search
			},
			{
				path:'/',
				redirect:'/nowshow'
			}
		]
	},
	// {path:"/detail/:_id", component:Detail,name:"detail"},
	{path:"/detail/:_id", component:Detail,name:"detail", props:(route) => ({id:route.params._id})},
	{path:"/cinema/:_id",component:Cinema,name:"cinema",props:(route) => ({id:route.params._id})},
	{path:"/login",component:Login},
	{path:"/reg",component:Reg},
	{path:"/getpassword",component:GetPassWord},
	{path:"/user",component:User}
	

]


let router = new VueRouter({
	routes
})

export default router
