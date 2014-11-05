//总控制器
define(['controllers/controllers'],
	function (controllers) {
		'use strict';
		controllers.controller('rootController', ['$scope', '$timeout', '$rootScope', 'queryService',
			function ($scope, $timeout, $rootScope, queryService) {
				$scope.$on('viewControllerReady', function () {
					queryService.queryProducts().then(function (res) {
						$scope.product = res.data;
						console.log($scope.product);
						$scope.$broadcast('getId', {'product_id':res.data[0].product_id, 'version':res.data[0].versions});
					});
				});
				$scope.toggle = function (scope) {
					scope.toggle();
				};

				$scope.tree = [
					{
						"id": 1,
						"title": "首页",
						"link": "#/index",
						"nodes": []
					},
					{
						"id": 1,
						"title": "基础数据",
						"nodes": [
							{
								"id": 11,
								"title": "应用趋势",
								"nodes": [
									{
										"id": 111,
										"title": "新增用户",
										"link": "#/newUser",
										"crumbs": ["基础数据", "应用趋势", "新增用户"],
										"nodes": []
									},
									{
										"id": 111,
										"title": "活跃用户",
										"link": "#/newUser",
										"crumbs": ["基础数据", "应用趋势", "新增用户"],
										"nodes": []
									},
									{
										"id": 111,
										"title": "商品评分",
										"nodes": []
									}
								]
							}
						]
					}
				];
				$scope.crubms = ["首页"];
			}

		]);
	}
);
