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
    if (this.basket.returnTotal() >= 20.00){
      return this.basket.returnTotal() - (this.basket.returnTotal() * 0.10);
    } else {
      return this.basket.returnTotal();
    }
  }

}

module.exports = shoppingBasket;