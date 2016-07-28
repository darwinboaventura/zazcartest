'use strict';

/**
 * @ngdoc filter
 * @name zazcarApp.filter:htmlToPlaintext
 * @function
 * @description
 * # htmlToPlaintext
 * Filter in the zazcarApp.
 */
angular.module('zazcarApp')
  .filter('htmlToPlaintext', function () {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });
