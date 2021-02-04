const router = require("express").Router();
var savedNotes = require('../db/db.json');

router
  .route("/notes")
  .get((_req, res) => {
    res.json(tableData);
  })
  .post((req, res) => {
    res.json(tableData);
  })
  .delete((req, res) => {
    res.json(tableData);
  });