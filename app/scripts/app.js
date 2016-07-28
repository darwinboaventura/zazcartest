'use strict';

/**
 * @ngdoc overview
 * @name zazcarApp
 * @description
 * # zazcarApp
 *
 * Main module of the application.
 */
angular
  .module('zazcarApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .constant('API_DRIBBBLE', 'https://api.dribbble.com/v1/')
  .constant('ACCESS_TOKEN', '9da9919bc5be8f73f83d07119a40644df61a99f127cc2384fe08882c5eeb763b')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/shotDetail/:ID', {
        templateUrl: 'views/shotdetail.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
