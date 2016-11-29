var shoppingBasket = {
  basket: [],
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
  }

}

module.exports = shoppingBasket;