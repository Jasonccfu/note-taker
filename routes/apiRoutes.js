// Import
let app = require("express").Router();
let fs = require("fs");
let db = require("../db/db.json");

// Get methods
app.get("/notes", (req, res) => {
  res.json(db);
});
