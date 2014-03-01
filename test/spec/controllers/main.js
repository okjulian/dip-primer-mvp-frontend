'use strict';

describe('Controller: MainCtrl', function () {
  var MainCtrl,
  scope,
  ServicioEmailMock;

  // load the controller's module
  beforeEach(module('launchApp', function ($provide) {
    ServicioEmailMock = jasmine.createSpyObj('ServicioEmail', ['enviar']);
    $provide.value('ServicioEmail', ServicioEmailMock);
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('deberia enviar email usando ServicioEmail', function () {
    scope.email = 'nombre@example.com';
    scope.enviarEmail(scope.email);
    expect(ServicioEmailMock.enviar).toHaveBeenCalledWith(scope.email);
  });
});
