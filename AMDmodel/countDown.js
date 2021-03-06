define(function(time) {
	function checkTime(i) {
		if (i < 0) {
			return "00";
		}
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	var theTime = new Date(time);
	return function timer() {
		var ts = (theTime.getTime()) - (new Date().getTime());//计算剩余的毫秒数
		var hh = parseInt(ts / 1000 / 60 / 60, 10);//计算剩余的小时数
		var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数
		var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数
		hh = checkTime(hh);
		mm = checkTime(mm);
		ss = checkTime(ss);
		return {
			hour: hh,
			minute: mm,
			second: ss
		}
	}
});
