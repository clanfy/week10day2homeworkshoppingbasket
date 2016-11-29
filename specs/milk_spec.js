var milk = require('../milk');
var assert = require('assert');

describe("Milk", function(){

  it("should have brand", function(){
    assert.equal("Cloverleaf", milk.brand);
  });

})