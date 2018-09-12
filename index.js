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
    var printOneItem = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
   return printOneItem

  } else if (cart.length === 2) {
var printTwoItems = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
return printTwoItems

} else if (cart.length === 3) {
  var printThreeItems = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
  return printThreeItems
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
