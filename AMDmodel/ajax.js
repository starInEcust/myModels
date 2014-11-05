/**
 * Created by 星 on 2014/8/29 0029.
 */
	
var ajax = function (conf) {
	// 初始化
	//type参数,可选
	var type = conf.type;
	//url参数，必填
	var url = conf.url;
	//data参数可选，只有在post请求时需要
	var data = conf.data;
	//datatype参数可选
	var dataType = conf.dataType;
	//回调函数可选
	var success = conf.success;

	if (type == null) {
		//type参数可选，默认为get
		type = "get";
	}
	if (dataType == null) {
		//dataType参数可选，默认为text
		dataType = "text";
	}
	// 创建ajax引擎对象
	var xhr = new XMLHttpRequest();
	// 打开
	xhr.open(type, url, true);
	// 发送
	if (type == "GET" || type == "get") {
		xhr.send(null);
	} else if (type == "POST" || type == "post") {
		xhr.setRequestHeader("content-type",
			"application/x-www-form-urlencoded");
		xhr.send(data);
	}
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			if (dataType == "text" || dataType == "TEXT") {
				if (success != null) {
					//普通文本
					success(xhr.responseText);
				}
			} else if (dataType == "xml" || dataType == "XML") {
				if (success != null) {
					//接收xml文档
					success(xhr.responseXML);
				}
			} else if (dataType == "json" || dataType == "JSON") {
				if (success != null) {
					//将json字符串转换为js对象
					success(eval("(" + xhr.responseText + ")"));
				}
			}
		}
	};
};
ajax({
	type: "get",
	url: "en_us.json",
	data:"",
	dataType: "json",
	success: function (data) {

	}
});