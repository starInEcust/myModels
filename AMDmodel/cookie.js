function  TXMCookie (){}
TXMCookie.prototype = {
	getCookie: function(key){
		var strCookie = document.cookie;
		var arrCookie = strCookie.split("; ");
		for(var i = 0; i < arrCookie.length; i++){
			var arr = arrCookie[i].split("=");
			if (this.undecodeCookie(arr[0]) == key){
				return this.undecodeCookie(arr[1]);
			}
		}
		return "";
	},

	setCookie: function(key, value, options){
		if (options == undefined){
			options = {};
		}
		//if (options.expires != undefined && typeof options.expires === 'number'){
		//	var days = options.expires, t = options.expires = new Date();
		//	t.setDate(t.getDate() + days);
		//}
		//else {
		//	options.expires = new Date();
		//}

		console.log(options);
		document.cookie = [
			encodeURIComponent(key), '=', encodeURIComponent(value),
			options.expires ? ';expires=' + options.expires.toUTCString() : '',
			options.path    ? ';path=' + options.path : '',
			options.domain  ? ';domain=' + options.domain : '',
			options.secure  ? ';secure' : ''
		].join('');
		//document.cookie = '';
		//document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
		//alert(document.cookie);
		//console.log(JSON.stringify(options));
		//console.log(document.cookie);
	},

	undecodeCookie: function(value){
		value = decodeURIComponent(value.replace(/\+/g, ' '))
		if (value.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		return value;
	}
};
