'use strict';

describe('Service: ServicioEmail', function () {
  var ServicioEmail,
  httpBackend,
  API_URL = 'http://dip-api.herokuapp.com';

  beforeEach(module('launchApp'));

  beforeEach(inject(function (_ServicioEmail_, $injector) {
    ServicioEmail = _ServicioEmail_;
    httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('deberia guardar email en el servidor', function () {
    var email = 'nombre@example.com';
    httpBackend.expectPOST(API_URL + '/email', {'email': email}).respond(201, '');
    ServicioEmail.enviar(email);
    expect(ServicioEmail.estado).toBe(null);
    httpBackend.flush();
    expect(ServicioEmail.estado).toBe('exito');
  });

  it('deberia indicar si hubo un error', function () {
    var email = 'nombre@example.com';
    httpBackend.expectPOST(API_URL + '/email', { 'email': email}).respond(404, '');
    ServicioEmail.enviar(email);
    expect(ServicioEmail.estado).toBe(null);
    httpBackend.flush();
    expect(ServicioEmail.estado).toBe('error');
  });

});
