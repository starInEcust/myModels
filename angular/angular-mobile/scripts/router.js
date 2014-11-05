define(['app'], function(app) {
	'use strict';
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/solo', {
			templateUrl: 'views/soloList.html',
			controller: 'soloListController'
		}).otherwise({redirectTo: '/solo'});
	}]);
});