require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
// Hello world!
const app = express();
app.use(cors());
app.use(json());
// Auth Controller
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);
// Product Controller
const { getAllProducts } = require(`${__dirname}/controllers/productCtrl`);
// Session MW & Init
const checkForSession = require("./middlewares/checkForSession");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 10000000 * 64 * 38 * 24
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Massive
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // attaches dbInstance t
    app.set("db", dbInstance);
    // the returned db obj constitutes an API for my schema with tables views and scripts attached.
  })
  .catch(err => {
    console.log(err);
  });
// app.use(checkForSession);
passport.use(strat);
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
passport.deserializeUser((user, done) => done(null, user));
// Auth API
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "/login"
  })
);
// Auth api
app.get("/logout", logout);
app.get("/api/me", getUser);
// Product Api
app.get("/products", getAllProducts);
// Port and Listener
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`${port} Listening`);
});
