const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
// App server binding.
const app = express();
// DB binding
const port = process.env.PORT || 4001;
const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("dbInstance", db);
  })
  .catch(err => {
    console.log(err);
  });
// middleware binding
app.use(json());
app.use(cors());
// port declaration
// listener post
app.listen(port, () => {
  console.log(`${port} Listening`);
});
