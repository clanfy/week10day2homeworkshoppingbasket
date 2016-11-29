var shoppingBasket = require('../shopping_basket');
var assert = require("assert");

var bread = require('../bread');

describe("Shopping Basket", function(){
  it("should start empty", function(){
    assert.equal(0, shoppingBasket.basket.length);
  });
})