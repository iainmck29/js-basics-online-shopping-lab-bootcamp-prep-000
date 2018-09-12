var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart (item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {itemName: [item], itemPrice: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartItems = [];
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'

  } else if (cart.length === 1) {
    var printOneItem = `In your cart, you have ${cart['itemName']} at ${cart['itemPrice']}.`
   return printOneItem

  } else if (cart.length === 2) {
var printTwoItems = `In your cart, you have ${Object.itemName(cart[cart.length-2])} at $${cart[cart.length-2][Object.itemPrice(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
return printTwoItems


} else {
  for (var i = 0; i < cart.length-1; i++)
  {
    //console.log(cart[i]);
    cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
  }

  var printThreeOrMoreItems = `In your cart, you have${cartItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
  return printThreeOrMoreItems;
}
}

function total() {
  var price = 0;
  for (var i = 0; i < cart.length; i++){
    var price = price + cart[i].itemPrice;

  } return price;
}

function removeFromCart(item) {
for (var i = 0; i<cart.length; i++) {
  if (cart.itemName == (item)) {
    cart.splice(i, 1)
    return cart;
  }
    return 'That item is not in your cart.'
}
}

function placeOrder(cardNumber) {
  // write your code here
}
