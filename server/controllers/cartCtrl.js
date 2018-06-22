let id = 1;

// const getCart = (req, res) => {
//   res.status(200).json(req.session.cart);
// };

const addToCart = (req, res) => {
  console.log(req.body.val);

  res.send("success");
};
// map req.session.cart over to the req.body
// const editCart = (req, res) => {};

// const deleteCart = (req, res) => {};
// filter req.session.cart and parseint the params
module.exports = {
  // getCart,
  addToCart
  // editCart,
  // deleteFromCart
};
//
