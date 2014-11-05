// The app/scripts/app.js file, which defines our AngularJS app
define([
	'angular',
	'ngAnimate',
	'controllers/controllers',
	'services/services',
	'filters/filters',
	'directives/directives',
	'ngRoute',
	'ngCookies'
],
function (angular) {
	'use strict';
	return angular.module('MyApp', ['ngAnimate', 'controllers', 'services', 'filters', 'directives', 'ngRoute', 'ngCookies'])
});

