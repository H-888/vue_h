import {getQuery} from "../../services/getQuery.js";

// 导入类型
import {
	UPDATE_COMINGSHOW
} from "../types.js"

const state = {
	comingShow:{}
}

const actions = {
	[UPDATE_COMINGSHOW]:({state,commit},collectionName) => getQuery(collectionName)
	.then(res=>{
		commit(UPDATE_COMINGSHOW,res)
	})
}
const mutations = {
	[UPDATE_COMINGSHOW]:(state,payload) => state.comingShow = payload,
}

const getters = {}

export default {
	namespaced:true,
	state,actions,mutations
}
