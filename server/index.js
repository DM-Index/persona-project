const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
// App server binding.
const app = express();
// middleware binding
app.use(json());
app.use(cors());
// port declaration
const port = 4000;
// listener post
app.listen(port, () => {
  console.log(`${port} Listening`);
});
