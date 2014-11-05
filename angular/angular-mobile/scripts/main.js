// the app/scripts/main.js file, which defines our RequireJS config
require.config({
	paths: {
		angular: 'vendor/angular.min',
		ngAnimate: 'vendor/angular-animate.min',
		ngRoute: 'vendor/angular-route.min',
		ngCookies: 'vendor/angular-cookie'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		ngAnimate: {
			deps: ['angular']
		},
		ngRoute: {
			deps: ['angular']
		},
		ngCookies: {
			deps: ['angular']
		}
	}
});

require([
		'angular',
		'app',
		'services/queryService',
//		'directives/datePicker',
		'controllers/rootController','controllers/soloListController'

	],
	function (angular) {
		'use strict';
		angular.element(document).ready(function(){
			angular.bootstrap(document, ['MyApp']);
		});

	}
);
