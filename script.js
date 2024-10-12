let cart = [];

function addToCart(cakeName) {
  cart.push(cakeName);
  alert(${cakeName} added to cart!);
}

function viewCakeDetails(cakeName, cakePrice, cakeImage) {
  // You can create a modal popup for cake details
  // This is just a placeholder alert for demo purposes
  alert(Details for ${cakeName}: Price - $${cakePrice});
}