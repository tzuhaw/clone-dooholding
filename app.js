const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

app.get("/", function (req, res) {
  console.log("Cookies: ", req.cookies);
  res.render("index");
});

app.get("*", function (req, res) {
  res.render("errorHandler");
});

app.listen(3000, function () {
  console.log("server start!");
});
