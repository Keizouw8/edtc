import { renderFile } from "ejs";
import daytona from "daytona";

var app = daytona();
app.engine("ejs", renderFile);
app.set("view engine", "ejs");

app.use("/static", daytona.static("./static"));
app.get("*", function(req, res){
    res.render("/index");
});

app.listen(8080);