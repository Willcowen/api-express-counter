const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { route } = require("express/lib/application");
const app = express();

app.use(morgan("dev"));
app.use(cors());

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

let counter = 0;

app.get("/counter", (req, res) => {
  console.log("got request!");
  res.json({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  console.log("got request!");
  counter++;
  res.json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  console.log("got request!");
  counter--;
  res.json({ counter: counter });
});

app.post("/counter/double", (req, res) => {
  console.log("got request!");
  counter = counter * 2;
  res.json({ counter: counter });
});

app.delete("/counter", (req, res) => {
  console.log("got request!");
  counter = 0;
  res.json({ counter: counter });
});

app.put("/counter", (req, res) => {
    if (!req.query.value) {
      res.json({ counter: counter });
    } else {
      counter = Number(req.query.value)
      res.json({ counter: counter });
    }
  });
