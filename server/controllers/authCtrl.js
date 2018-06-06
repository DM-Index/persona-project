const Auth0Strategy = require("passport-auth0");
const passport = require("passport");
// Destructure Env Variables
const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;
// Pseudo class that allows new connections to inherit 'class' properties
const strat = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    callbackURL: "/login",
    scope: "openid profile"
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile);
  }
);
// Get User Method
const getUser = (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.status(403).json({ message: "Not Logged In" });
};
// Logout Method
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};
// Auth Direct Method
// Not currently working
const handleAuth = (req, res) => {
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "http://www.oprah.com/index.html"
  });
};

module.exports = {
  strat,
  getUser,
  logout,
  handleAuth
};
