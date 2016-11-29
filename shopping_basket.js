var customer = require('./customer');

var shoppingBasket = {
  basket: [],
  customer: customer,
  addToBasket: function(item){
    this.basket.push(item);
    // console.log(item.name + "has been added to the basket.")
  },
  removeFromBasket: function(item){
    var pos = this.basket.indexOf(item);
    this.basket.splice(pos, 1);
  },
  returnTotal: function(){
    var total = 0;

    for (var item of this.basket){
      total += item.price;
    }
    return total;
  },
  tenPercentDiscount: function(){
    var total = 0;

    for (var item of this.basket){
      total += item.price;
    }
    if (total >= 20){
      var discount = (total * 0.10);
      return total - discount;
    } else {
      return total;
    }
  },
  loyaltyDiscount: function(){
    var loyaltyTotal = 0;
    if (this.customer.loyaltyCard = true){
      var total = 0;
      for (var item of this.basket){
        total += item.price;
      }
      if (total >= 20){
        var tenDiscount = (total * 0.10);
        var tenDiscountTotal = total - tenDiscount;
      } else {
        var tenDiscountTotal = total;
      }
      var fiveDiscount = (tenDiscountTotal * 0.05);
      return (tenDiscountTotal - fiveDiscount).toFixed(2);
    } else {
      return tenDiscountTotal.toFixed(2);
    }
  }


}

module.exports = shoppingBasket;