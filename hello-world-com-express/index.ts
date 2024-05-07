const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.get("/oi", (req, res) => {
  res.send({
    message: "Olá Mundo",
  });
});

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
