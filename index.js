require("dotenv").config();

const express = require("express");
const Scraper = require('@yimura/scraper').default;

const youtube = new Scraper();
var app = express();
app.set("view engine", "ejs");
app.locals = process.env;

app.use("/static", express.static("./static"));
app.post("/yt", async function(req, res){
    if(!req.query.query) req.query.query = "";
    var { videos } = await youtube.search(req.query.query).catch(() => res.json([]));
    if(!videos) return;
    var response = [];
    for(var i = 0; i < videos.length; i++) response.push({
        id: videos[i].id,
        title: videos[i].title,
        subtitle: videos[i].channel.name,
        image: videos[i].thumbnail
    });
    res.json(response);
});
app.get("*", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT || 8080);