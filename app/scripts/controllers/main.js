'use strict';

/**
 * @ngdoc function
 * @name enov8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enov8App
 */
angular.module('enov8App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
