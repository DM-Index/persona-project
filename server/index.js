require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
// Environment Variable Destructuring
const { CONNECTION_STRING, SESSION_SECRET, PORT } = process.env;
// Auth Controller
const {
  getUser,
  strat,
  logout,
  handleAuth
} = require(`${__dirname}/controllers/authCtrl`);
// Session Middleware
const { checkForSession } = require(`${__dirname}/middlewares/checkForSession`);
// Server Declaration
const app = express();
// MASSIVE LETS US QUERY OUR DB WITH NODE INSTEAD OF MAPPING DB TO OBJECTS WE CAN WORK DIRECTLY WITH TABLES AND FUNCTIONS
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => {
    console.log(err);
  });
// middleware binding
app.use(cors());
app.use(json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 10000000 * 64 * 38 * 24
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(checkForSession);
passport.use(strat);
// Answer this. What does serializeUser do?
passport.serializeUser((user, done) => {
  const db = app.get("db");
  db.users
    .getUserByAuthId([user.id])
    .then(response => {
      if (!response[0]) {
        db.users
          .addUserByAuthId([user.displayName, user.id])
          .then(res => done(null, res[0]))
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
});
// Answer this What does deserializeUser do?
passport.deserializeUser((user, done) => done(null, user));
app.get(
  "/login",
  passport.authenticate("auth0", {
    // does this need to be my live server?
    successRedirect: "localhost:3001/",
    failureRedirect: "/login"
  })
);
app.get("/api/me", getUser);

// Test api
app.get("/api/test", (req, res) => {
  res.json("Test Successful");
});

const port = PORT || 3001;
app.listen(port, () => {
  console.log(`${port} Listening`);
});
// tern state
