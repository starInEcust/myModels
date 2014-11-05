//获取前一天的时间
define(function() {
	return function(severaldays){
		var objdate = new Date();
		var newDate = new Date();
		newDate.setDate(objdate.getDate() - severaldays);
		var year = newDate.getFullYear();
		var month = newDate.getMonth() + 1;
		var day = newDate.getDate();
		if (day < 10) {
			day = '0' + day;
		}
		if (month < 10) {
			month = '0' + month;
		}
		return year + '-' + month + '-' + day;
	}


});