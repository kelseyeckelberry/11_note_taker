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
//   app.delete("/api/notes", (req, res) => {
//     res.json(savedNotes);
//   });
};
