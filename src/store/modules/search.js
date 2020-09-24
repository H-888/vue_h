import {Search} from "../../services/getQuery.js";

import {
	UPDATE_SEARCH
} from "../types.js"

const state = {
	search:{}
}

const actions = {
	[UPDATE_SEARCH]:({state,commit},goodsName) => Search({goodsName})
	.then(res=>{
		commit(UPDATE_SEARCH,res)
	})
}
const mutations = {
	[UPDATE_SEARCH]:(state,payload) => state.search = payload,
}

const getters = {
	
}

export default {
	namespaced:true,
	state,actions,mutations
}