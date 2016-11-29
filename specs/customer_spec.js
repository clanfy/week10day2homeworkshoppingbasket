var shoppingBasket = require('../shopping_basket');
var assert = require('assert');
var customer = require('../customer');
var bread = require('../bread');
var eggs = require('../eggs');
var milk = require('../milk');

describe ("Customer", function(){

  it("should return name", function(){
    assert.equal("Mavis", customer.name);
  });

  it("should confirm loyalty card", function(){
    assert.equal(true, customer.loyaltyCard);
  });

    it("should start empty", function(){
      assert.equal(0, shoppingBasket.basket.length);
    });

      it("should add 1 item", function(){
        shoppingBasket.addToBasket(bread);
        assert.equal(1, shoppingBasket.basket.length);
      });

      it("should add 2 items", function(){
        shoppingBasket.addToBasket(bread);
        assert.equal(2, shoppingBasket.basket.length);
      });

      it("should add 3 items", function(){
        shoppingBasket.addToBasket(eggs);
        assert.equal(3, shoppingBasket.basket.length);
      });

      it("should remove item", function(){
        shoppingBasket.removeFromBasket(bread);
        assert.equal(2, shoppingBasket.basket.length);
      });

      it("should return total", function(){
        assert.equal(3.50, shoppingBasket.returnTotal());
      });

      it("should not apply ten percent discount", function(){
        assert.equal(3.50, shoppingBasket.tenPercentDiscount());
      })

      it("should apply ten percent discount", function(){
        for (var i = 0; i < 10; i++) {
          shoppingBasket.addToBasket(eggs);}
        assert.equal(21.15, shoppingBasket.tenPercentDiscount());
      })

});
