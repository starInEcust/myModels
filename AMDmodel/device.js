function device() {
	var a = {type: null,os: null,os_version: 0,width: 0,browser: "not-safari"};
	if (window.navigator.userAgent.match(/(iphone|iPad|iPod)/i)) {
		a.os = "ios";
		var c = window.navigator.userAgent.match(/OS (\d)_(\d)/i);
		a.os_version = 1 * c[1] + 0.1 * c[2];
		-1 != window.navigator.userAgent.indexOf("iPhone") ? (a.type = "iPhone", window.devicePixelRatio && 2 == window.devicePixelRatio && (a.type = "iPhone4")) : -1 != window.navigator.userAgent.indexOf("iPad") && (a.type = "iPad");
	}
	window.navigator.userAgent.match(/(safari)/i) && (a.browser = "safari");
	window.navigator.userAgent.match(/(chrome)/i) && (a.browser = "chrome");
	window.navigator.userAgent.match(/MQQ/i) && (a.browser =
		"QQ");
	window.navigator.userAgent.match(/Android/i) && (a.type = "Android", a.os = "Android", c = window.navigator.userAgent.match(/Android (\d)\.(\d)/i), a.os_version = 1 * c[1] + 0.1 * c[2]);
	a.type || (a.type = "pc");
	a.width = document.documentElement.clientWidth;
	return a;
}