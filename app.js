const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const camps = [
  {
    name: "Kigali Camps",
    image:
      "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Musanze Mountains",
    image:
      "https://images.unsplash.com/photo-1603738397297-a374b78e9626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rusizi Forests",
    image:
      "https://images.unsplash.com/photo-1455496231601-e6195da1f841?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kigali Camps",
    image:
      "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/camps", (req, res) => {
  res.render("camps", { camps });
});

app.post("/camps", (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCamp = { name, image };
  camps.push(newCamp);
  res.redirect("/camps");
});

app.get("/camps/new", (req, res) => {
  res.render("new");
});

app.listen(3000, function () {
  console.log("yelp camp server has started");
});
