'use strict';

angular.module('launchApp')
.service('ServicioEmail', function ServicioEmail($http) {
  var that = this;

  this.estado = null;

  this.enviar = function (email) {
    $http.post('http://dip-api.herokuapp.com/email', { 'email': email })
    .success(exitoCallback)
    .error(errorCallback);
  };

  function exitoCallback() {
    that.estado = 'exito';
  }

  function errorCallback() {
    that.estado = 'error';
  }

});
