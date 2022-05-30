const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist/bootcamp-app")));
app.set("view engine", "pug");

app.get("/port", (req, res) => {
  res.send({ message: process.env.PORT });
});

app.get("/", (_, res) => {
  res.status(200).sendFile("index.html", {
    root: path.join(__dirname, "dist/bootcamp-app"),
  });
});

app.get("/*", (_, res) => {
  res.status(200).sendFile("index.html", {
    root: path.join(__dirname, "dist/bootcamp-app"),
  });
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "success" });
});

app.listen(process.env.PORT || 80, () => {
  console.log(`listening on port ${process.env.PORT || 80}`);
});
