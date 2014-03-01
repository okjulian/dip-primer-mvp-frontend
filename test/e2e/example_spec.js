'use strict';

describe('Pagina launch', function() {
  it('deberia', function() {
    browser.get('/#/');

    var greeting = element(by.id('title'));

    expect(greeting.getText()).toEqual('launch');
  });
});
