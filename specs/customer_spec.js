var customer = require('../customer');
var shoppingBasket = require('../shopping_basket');
var assert = require('assert');

describe ("Customer", function(){

  it("should return name", function(){
    assert.equal("Mavis", customer.name);
  });

});
