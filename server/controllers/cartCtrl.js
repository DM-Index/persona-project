let id = 1;
// there is no body on session
const getCart = (req, res) => {
  console.log("Get Cart Firing", req.session.cart);
  req.user
    ? res.status(200).json(req.session.cart)
    : res.status(401).json("Please sign in");
};

const addToCart = (req, res) => {
  console.log("cart on session", req.session.cart);

  console.log("this is what we posted:", req.body);

  //add what we posted from FE into the cart
  req.session.cart.cart.push(req.body.val);

  // const inCart = req.session.cart.find(item => item.type === req.body.type);
  // inCart
  //   ? inCart.quantity++
  //   : (cartItem = {
  //       ...req.body,
  //       id,
  //       quantity: 1
  // });
  // req.session.cart.push(cartItem);
  id++;

  console.log(req.session.cart);
  req.body.val
    ? res.status(200).json(req.session.cart)
    : res.status(401).json("Please Sign in");
};

const deleteFromCart = (req, res) => {
  const filtered = req.session.cart.filter(
    item => item.id !== parseInt(req.params.id)
  );
  req.session.cart = filtered;
  res.status(200).json(req.session.cart);
};

module.exports = {
  getCart,
  addToCart,
  deleteFromCart
};
