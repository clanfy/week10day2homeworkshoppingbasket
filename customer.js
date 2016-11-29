var shoppingBasket = require('./shopping_basket');
var customer = require('./customer');
var bread = require('./bread');
var eggs = require('./eggs');
var milk = require('./milk');

var customer = {
  name: "Mavis",
  shoppingBasket: shoppingBasket,
  loyaltyCard: true
}



module.exports = customer;