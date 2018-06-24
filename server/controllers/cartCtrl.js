let id = 1;

const getCart = (req, res) => {
  console.log("Get Cart Firing", req.session.body.cart);
  req.user
    ? res.status(200).json(req.session.body.cart)
    : res.status(401).json("Please sign in");
};

const addToCart = (req, res) => {
  const inCart = req.session.cart.find(item => item.type === req.body.type);
  inCart
    ? inCart.quantity++
    : (cartItem = {
        ...req.body,
        id,
        quantity: 1
      });
  req.session.body.cart.push(cartItem);
  id++;

  console.log(req.session.body.val);
  req.session.body.val
    ? res.status(200).json(req.session.body.val)
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
