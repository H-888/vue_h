import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import detail from "../store/modules/detail.js"
import nowShow from "../store/modules/nowShow.js"
import comingShow from "../store/modules/comingShow.js"
import search from "../store/modules/search.js"
import cinema from "../store/modules/cinema.js"
import city from "../store/modules/city.js"
let store = new Vuex.Store({
	// actions,mutations,state,
	modules:{
		detail,
		nowShow,
		comingShow,
		search,
		cinema,
		city
	}
})
export default store;