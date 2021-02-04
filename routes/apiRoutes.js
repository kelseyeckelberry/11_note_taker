const savedNotes = require("../db/db.json");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    fs.readFile("../db/db.json", (err, data) => {
      if (err) throw err;
      var savedNotes = JSON.parse(data);
      res.json(savedNotes);
    });
  });
//   app.post("/api/notes", (req, res) => {
//     var newNote = {
//       id: id,
//       title: req.body.title,
//       text: req.body.text,
//     };
//     fs.readFile("../db/db.json", (err, data) => {
//       if (err) throw err;
//       var savedNotes = JSON.parse(data);
//       savedNotes.push(newNote);
//       fs.writeFile("../db/db.json", JSON.stringify(savedNotes), (err) => {
//         if (err) throw err;
//       });
//     });
//   });
  app.delete("/api/notes/:id", (req, res) => {
    var notes = JSON.parse(fs.readFileSync("../db/db.json", "utf-8"));
    var newNote = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync("../db/db.json", JSON.stringify(newNote));
    res.json(true);
  });
};
