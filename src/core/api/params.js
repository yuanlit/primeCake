import global from "@/core/global/global";
// 定义所有参数
// console.log(global)
const getParams = global.getParam(); //拿到了url后面传的参数(?name=msea&sex=1)并转化成json

const params = {
    name:getParams.name||"",
	sex:getParams.sex||"",
	v:new Date().getTime()
}

export default params;