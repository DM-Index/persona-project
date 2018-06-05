const checkForSession = (req, res, next) => {
  //   const { session } = req;
  if (!req.session.cart) req.session.cart = [];
  next();
};

module.exports = {
  checkForSession
};
