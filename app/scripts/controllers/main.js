'use strict';

/**
 * @ngdoc function
 * @name zazcarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zazcarApp
 */
angular.module('zazcarApp')
	.controller('MainCtrl', function ($scope, shots, $routeParams) {
		shots.getAll().then(function(response) {
	        $scope.shots = response;
	    });

	    shots.getByID($routeParams.ID).then(function(response) {
			$scope.shot = response;
		});
	});
