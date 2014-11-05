//datePicker指令，显示datePicker的 UI，设置全局变量dateStart，dateEnd，默认显示前一天，并记录数据。
define(['directives/directives', 'otherModel/getDate', 'jQuery', 'jQueryWidget', 'calendar'], function(directives, yesterday) {
	'use strict';
	directives.directive('datePicker', ['$rootScope', 'queryService', function($rootScope, queryService) {
		return {
			restrict: 'AE',
			replace: true,
			template:'<div class="element">' +
				'<div class="input-control text" id="datepicker">' +
				'<input type="text">' +
				'<button class="btn-date"></button>' +
				'</div>' +
				'</div>',
			link: function ($scope, element, attrs) {

//				console.log($scope[attrs.datePicker]);

				var initDate = yesterday(1);
				if(window.sessionStorage[attrs.datePicker]){
					initDate = window.sessionStorage[attrs.datePicker];
				}
				element.children('#datepicker').datepicker({
					date: initDate, // set init date
					effect: "slide", // none, slide, fade
					position: "bottom",
					locale: 'zhCN',
					selected: function () {
//						var Date = getDate();
//						if(oldDate == Date){return}
//						oldDate = Date;
						window.sessionStorage[attrs.datePicker] = getDate();
						dateFormat();
//						console.log(queryService.formatDate);
					}
				});
				function getDate() {
					var date = element.find('#datepicker input').val();
					date = date.split('.').reverse().join('-');
					return date;
				}
				function dateFormat(){
//					console.log(window.sessionStorage[attrs.datePicker]);
					if(window.sessionStorage[attrs.datePicker]){
						var formatDate = window.sessionStorage[attrs.datePicker].split('-').join('');
					}
//					console.log(formatDate);
					queryService.formatDate[attrs.datePicker] = formatDate;
					if(queryService.formatDate.dateStart && queryService.formatDate.dateEnd){
						queryService.request.date = [queryService.formatDate.dateStart,queryService.formatDate.dateEnd].sort(function(a,b){return a>b?1:-1});
					}
				}
				dateFormat();
//				if(!$rootScope.localStorage[attrs.datePicker]){
//					$rootScope.localStorage[attrs.datePicker] = getDate();
//					var oldDate = $rootScope.localStorage[attrs.datePicker];
//					queryService.request.date = oldDate;
//				}
			}
		};
	}]);
});