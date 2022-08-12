const saveCartItems = (CartItems) => {
  localStorage.setItem('cartItems', CartItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
