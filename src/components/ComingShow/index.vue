<template>
	<Cell v-if="comingShow.data" :list="comingShow.data.data"></Cell>
</template>
<script>
	import Cell from "../Cell/index.vue"
	import axios from "axios"
	import {UPDATE_COMINGSHOW} from "../../store/types.js"
	import {mapActions, mapState } from 'vuex'
	export default {
		name: "ComingShow",
		data() {
			return {}
		},
		methods: {

		},
		methods: mapActions("comingShow", [UPDATE_COMINGSHOW]),
		computed: mapState('comingShow', ['comingShow']),
		components: {
			Cell
		},
		mounted() {
			this[UPDATE_COMINGSHOW]({
				collectionName: "movieOnInfoList"
			})
		},
	}
</script>
<style scoped>

</style>
