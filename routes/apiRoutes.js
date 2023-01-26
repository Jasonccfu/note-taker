// dependencies needed for apiRoute code
let app = require("express").Router();
let fs = require("fs");
let db = require("../db/db.json");
let counter = 0;

// GET
app.get("/notes", (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(db);
});

// POST
app.post("/notes", (req, res) => {
  let note = {
    id: counter++,
    title: req.body.title,
    text: req.body.text,
  };
  // push to note
  db.push(note);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), (err, res) => {});
  res.json(db);
});

// DELETE
app.delete("/notes/:id", (req, res) => {
  let db = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  let noteId = req.params.id.toString();
  db = db.filter((selected) => {
    return selected.id != noteId;
  });
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json(db);
});

module.exports = app;
