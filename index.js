require("dotenv").config();

const PORT = process.env.PORT || 8080;
const express = require("express");

var app = express();
app.set("view engine", "ejs");
app.locals = process.env;

app.use("/static", express.static("./static"));
app.get("*", function(req, res){
    res.render("index");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));