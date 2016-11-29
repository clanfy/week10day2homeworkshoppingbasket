

var shoppingBasket = {
  basket: []
  returnTotal: function(){
    var i = 0;
    var total = 0;

    for (i, i < arguments.length, i ++){
      total += arguments[i].price
    }
    return total;
  }
}

module.exports = shoppingBasket;