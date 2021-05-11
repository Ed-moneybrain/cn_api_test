const app = require("express")();
const path = require("path");
app.get("/", (req,res) => res.sendFile(path.join(__dirname, "weather.html")));
app.listen("3000", (req,res) => {console.log("listening in port 3000")});