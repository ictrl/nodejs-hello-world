//importing node framework
var express = require("express");

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
  res.send("pipeline done");
});

const PORT = process.env.PORT || 80;

app.listen(PORT);
console.log("server listening on port 80");
module.exports = app;
