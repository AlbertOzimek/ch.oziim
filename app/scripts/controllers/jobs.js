'use strict';

/**
 * @ngdoc function
 * @name enov8App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the enov8App
 */
angular.module('enov8App')
    .controller('jobsModalCtrl', function($scope, $http) {
      // Jobs Modal Start - needs to go to external file
      $('#jobsModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var jobName = button.data('job-name');
        var jobId = button.data('job-id') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.job-name').text(jobName);
        modal.find('.job-id').text('Job ID: ' + jobId);
      })
    })
  .controller('jobsCtrl', function($scope, $http) {
    $http.get("data/jobs.json")
        .success(function (response) {$scope.items = response.items;});
  })
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
