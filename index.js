const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {

  res.render("index copy");
});

app.get("/add", (req, res) => {

  res.render("add");
});

app.get("/edit", (req, res) => {

    res.render("edit");
  });
  app.get("/carlist", (req, res) => {

    res.render("carlist");
  });
  


app.use("/", (req, res) => {
  res.status(404);
  res.send("Halaman yang anda cari tidak ditemukan!");
});

app.listen(PORT, () => {
  console.log("Berhasil! Silahkan akses http://localhost:%d", PORT);
});