const Auth0Strategy = require("passport-auth0");
const passport = require("passport");
// pulling properties from environmental object
const { CLIENT_ID, CLIENT_SECRET, DOMAIN, CALLBACK, SCOPE } = process.env;
// Pseudo class that allows new connections to inherit 'class' properties
const strat = new Auth0Strategy(
  {
    // Look to change scope, currently using OpenId but it's not about half as secure as standard
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    callbackURL: CALLBACK,
    scope: SCOPE
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile);
    console.log(profile, "profile");
  }
);
// Get User Method
const getUser = (req, res) => {
  console.log(req, res);
  if (req.user) res.status(200).json(req.user);
  else res.status(403).json({ message: "Not Logged In" });
};
// Logout Method
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/");
  });
};
// Auth Direct Method
// Not currently working
const handleAuth = (req, res) => {
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: CALLBACK
  });
};

module.exports = {
  strat,
  getUser,
  logout,
  handleAuth
};
