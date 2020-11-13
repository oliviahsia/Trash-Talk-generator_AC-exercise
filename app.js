const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const trashTalkGenerate = require("./generator");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const trashTalk = trashTalkGenerate(req.body);
  res.render("index", { trashTalk: trashTalk });
});

app.listen(port, () => {
  console.log(`Express app listening on port${port}.`);
});
