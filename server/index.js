require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");

// Controllers

// Middlewares
const { checkForSession } = require(`${__dirname}/middlewares/checkForSession`);
// App server binding.
const app = express();

// const { CONNECTION_STRING } = process.env;
// MASSIVE LETS US QUERY OUR DB WITH NODE INSTEAD OF MAPPING DB TO OBJECTS WE CAN WORK DIRECTLY WITH TABLES AND FUNCTIONS
// This is throwing an error.
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("dbInstance", db);
  })
  .catch(err => {
    console.log(err);
  });
// middleware binding
app.use(cors());
app.use(json());
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
app.use(checkForSession);

// port declaration
// listener post
const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`${port} Listening`);
});
