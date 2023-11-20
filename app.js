const express = require("express");
const app = express();
const mongoose = require("mongoose");
const parser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Schema setup

const campSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Camp = mongoose.model("Camp", campSchema);

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/camps", (req, res) => {
  const camps = Camp.find()
    .then((camps) => {
      res.render("camps", { camps });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
});

app.post("/camps", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCamp = { name, image };
  Camp.create(newCamp)
    .then((camp) => {
      res.redirect("/camps");
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
});

app.get("/camps/new", (req, res) => {
  res.render("new");
});

app.listen(3000, function () {
  console.log("yelp camp server has started");
});
