define(['directives/directives'], function(directives) {
	'use strict';
	directives.directive('changeTemp', ['$rootScope', function($rootScope) {
		return {
			restrict: 'AE',
			link: function($scope, element, attrs) {
				element.on('click', function(){
					element.addClass('active').siblings().removeClass('active');
					$scope.$apply(function(){
						$scope.tableTemp = attrs.changeTemp;
					});
				});
			}
		};
	}]);
});
