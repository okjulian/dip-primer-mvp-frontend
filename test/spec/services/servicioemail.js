'use strict';

describe('Service: ServicioEmail', function () {

  // load the service's module
  beforeEach(module('launchApp'));

  // instantiate service
  var ServicioEmail;
  beforeEach(inject(function (_ServicioEmail_) {
    ServicioEmail = _ServicioEmail_;
  }));

  it('deberia tener el metodo enviar', function () {
    expect(!!ServicioEmail).toBe(true);
    expect(typeof ServicioEmail.enviar).toBe('function');
  });

});
