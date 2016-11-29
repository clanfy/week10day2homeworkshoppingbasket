var milk = require('../milk');
var assert = require('assert');

describe("Milk", function(){

  it("should have brand", function(){
    assert.equal("Cloverleaf", milk.brand);
  });

  it("should have price", function(){
    assert.equal(0.85, milk.price);
  })

})