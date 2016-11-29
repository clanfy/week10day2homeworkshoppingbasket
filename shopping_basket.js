

var shoppingBasket = {
  basket: [],
  addToBasket: function(item){
    this.basket.push(item);
    // console.log(item.name + "has been added to the basket.")
  }
}

module.exports = shoppingBasket;