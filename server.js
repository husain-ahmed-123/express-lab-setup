const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("hussain");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
//create an express server and store it in app
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("server orking");
});
