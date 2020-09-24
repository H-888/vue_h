import axios from "../plugins/axios.js";

//详情页和热映,即将上映
async function getQuery({
	collectionName = "",
	_id = null,
	params = {
		_page: 1,
		_limit: 20,
	}
}) {
	let url = _id ?
	"/api/cell/"+_id :
	"/api/cell" 
	let data = await axios.get(url)
	return data 
};

// 搜索
async function Search({
	goodsName = ""
}){
	let url = "/mao/ajax/search?kw="+goodsName.content+"&cityId=10&stype=-1";
	let data = await axios.get(url)
	return data 
}

//影院
async function getCinema(){
	let url = "/mao/ajax/filterCinemas?ci=6";
	let data = await axios.get(url)
	return data 
}
export {
	getQuery,Search,getCinema
}
