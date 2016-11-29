var shoppingBasket = require('../shopping_basket');
var assert = require("assert");

var bread = require('../bread');

describe("Shopping Basket", function(){

  it("should start empty", function(){
    assert.equal(0, shoppingBasket.basket.length);
  });

  it("should add 1 item", function(){
    shoppingBasket.addToBasket(bread);
    assert.equal(1, shoppingBasket.basket.length);
  })

  it("should add 2 items", function(){
    shoppingBasket.addToBasket(bread);
    assert.equal(2, shoppingBasket.basket.length);
  })

})