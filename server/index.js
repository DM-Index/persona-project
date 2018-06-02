const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const app = express();

app.use(json());
app.use(cors());

const port = 4000;
app.listen(port, () => {
  console.log(`${port} Listening`);
});
