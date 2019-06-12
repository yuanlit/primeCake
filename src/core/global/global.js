class Global {
 	getImageBlob(url, cb) {
	// 将一个请求的imgurl返回一个二进制数据
		var xhr = new XMLHttpRequest();
		var timeStamp = new Date().getTime();
		xhr.open("get", url+"?"+timeStamp, true);
		xhr.responseType = "blob";
		xhr.onload = function() {
		if (this.status == 200) {
		  if (cb) cb(this.response);
		}
		};
		xhr.send();
	}

	getParam() {
		//将url后面的参数 ?name=msea&sex=1  >{name:"msea",sex:1}
			var search = {};
			try {
			location.search
			.substr(1)
			.split('&')  
			.forEach(function(item) {
			var s = item.split('=');
			search[s[0]] = s[1];
			});
			} catch (e) {
			// 抛出异常
			throw new Error(JSON.stringify(search));
			}
			return search;
		}
}

export default new Global();