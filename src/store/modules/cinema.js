import {getCinema} from "../../services/getQuery.js";

import {
	UPDATE_CINEMA
} from "../types.js"

const state = {
	cinema:null
}

const actions = {
	[UPDATE_CINEMA]:({state,commit},payload) => getCinema()
	.then(res=>{
		commit(UPDATE_CINEMA,res)
	})
}
const mutations = {
	[UPDATE_CINEMA]:(state,payload) => state.cinema = payload,
}

const getters = {
	[UPDATE_CINEMA](state){
		return state
	}
}

export default {
	namespaced:true,
	state,actions,mutations
}