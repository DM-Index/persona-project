module.exports = {
  checkForSession: (req, res, next) => {
    if (!req.session.user) {
      req.session.user = {
        cart: []
      };
    }
    next();
  }
};

// const checkForSession = (req, res, next) => {
//   if (!req.session.cart) {
//     req.session.cart = [];
//   }
//   next();
// };

// module.export = {
//   checkForSession
// };
