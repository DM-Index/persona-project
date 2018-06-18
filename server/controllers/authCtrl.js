require("dotenv").config();
const Auth0Strategy = require("passport-auth0");

const strat = new Auth0Strategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    domain: process.env.DOMAIN,
    callbackURL: process.env.CALLBACK,
    scope: process.env.SCOPE
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile);
  }
);
// Get User
const getUser = (req, res) => {
  console.log("get user firing", req.user);
  if (req.user) {
    return res.status(200).json(req.user);
  } else {
    res.status(401).json("Not Logged In");
  }
};
// Logout Method
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};

module.exports = {
  strat,
  getUser,
  logout
};
