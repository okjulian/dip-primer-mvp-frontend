'use strict';

angular.module('launchApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.config(function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
