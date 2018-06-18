module.export = {
  checkForSession: (req, res, next) => {
    if (!req.session.cart) {
      req.session.cart = [];
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
