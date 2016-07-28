'use strict';

/**
 * @ngdoc service
 * @name zazcarApp.shots
 * @description
 * # shots
 * Service in the zazcarApp.
 */
angular.module('zazcarApp')
  .service('shots', function ($http, API_DRIBBBLE, ACCESS_TOKEN) {
	return {
		getAll: function() {
			return $http.get(API_DRIBBBLE + "shots?access_token=" + ACCESS_TOKEN + '&sort=views').then(function(response) {
				return response.data;
			});
		},

		getByID: function(ID) {
			return $http.get(API_DRIBBBLE + "shots/" + ID +"?access_token=" + ACCESS_TOKEN + '').then(function(response) {
				return response.data;
			});
		} 
	};
  });
