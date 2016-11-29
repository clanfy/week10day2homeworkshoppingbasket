

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
  
}

module.exports = shoppingBasket;