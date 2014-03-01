'use strict';

angular.module('launchApp')
  .controller('MainCtrl', function ($scope, ServicioEmail) {
    $scope.enviado = false;
    $scope.enviarEmail = function (email) {
      ServicioEmail.enviar(email);
      $scope.enviado = true;
    };
  });
