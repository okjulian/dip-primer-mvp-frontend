'use strict';

describe('Pagina', function() {
  it('deberia mostrar confirmacion al recibir un email', function() {
    browser.get('/#/');

    var entradaEmail = element(by.id('email'));
    var botonVamos = element(by.id('vamos'));
    var confirmacion = element(by.id('confirmacion'));

    entradaEmail.sendKeys('nombre@example.com');
    botonVamos.click();
    expect(confirmacion.isDisplayed()).toBe(true);
    expect(entradaEmail.isDisplayed()).toBe(false);
    expect(botonVamos.isDisplayed()).toBe(false);
  });
});
