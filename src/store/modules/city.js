import {
	UPDATE_CITY
} from "../types.js"
const state = {
	city: {}
}

const actions = {
	[UPDATE_CITY]: ({
		state,
		commit
	}, payload) => {
		if (payload == 1) Browserlocation()
		else cityPositioning()

		// 查询位置
		function Browserlocation() {
			AMap.plugin('AMap.Geolocation', function() {
				var geolocation = new AMap.Geolocation({
					// 是否使用高精度定位，默认：true
					enableHighAccuracy: true,
					// 设置定位超时时间，默认：无穷大
					timeout: 10000,
					// 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
					buttonOffset: new AMap.Pixel(10, 20),
					//  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
					zoomToAccuracy: true,
					//  定位按钮的排放位置,  RB表示右下
					buttonPosition: 'RB'
				})

				geolocation.getCurrentPosition()
				AMap.event.addListener(geolocation, 'complete', onComplete)
				AMap.event.addListener(geolocation, 'error', onError)

				function onComplete(data) {
					commit(UPDATE_CITY, data)
				}

				function onError(data) {
					// 定位出错
				}
			})
		}


		//查询城市
		function cityPositioning() {
			AMap.plugin('AMap.CitySearch', function() {
				var citySearch = new AMap.CitySearch()
				citySearch.getLocalCity(function(status, result) {
					if (status === 'complete' && result.info === 'OK') {
						// 查询成功，result即为当前所在城市信息
						commit(UPDATE_CITY, result)
					}
				})
			})
		}

	}
}
const mutations = {
	[UPDATE_CITY]: (state, payload) => {
		state.city = payload
	}
}

const getters = {
	[UPDATE_CITY]: (state) => {
		return state.city.province ? state.city.province : state.city
	}
}

export default {
	namespaced: true,
	actions,
	state,
	mutations,
	getters
}
