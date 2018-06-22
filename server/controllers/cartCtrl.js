let id = 1;

const getCart = (req, res) => {
  res.status(200).json(req.session.cart);
};

const addToCart = (req, res) => {};
// map req.session.cart over to the req.body
const editCart = (req, res) => {};

const deleteCart = (req, res) => {};
// filter req.session.cart and parseint the params
module.export = {
  getCart
  // addToCart,
  // editCart,
  // deleteFromCart
};
