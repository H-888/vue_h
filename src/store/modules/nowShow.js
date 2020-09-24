import {getQuery} from "../../services/getQuery.js";

// 导入类型
import {
	UPDATE_NOWSHOW
} from "../types.js"

const state = {
	nowShow:{}
}

const actions = {
	[UPDATE_NOWSHOW]:({state,commit},collectionName) => getQuery(collectionName)
	.then(res=>{
		commit(UPDATE_NOWSHOW,res)
	})
}
const mutations = {
	[UPDATE_NOWSHOW]:(state,payload) => state.nowShow = payload,
}

const getters = {}

export default {
	namespaced:true,
	state,actions,mutations
}

