const fs = require('fs');

module.exports = function (app) {
  app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      let savedNote = JSON.parse(data);
      let id = savedNote.length + 1;
      let newNote = JSON.stringify(req.body);
      newNote = JSON.parse(newNote);
      savedNote.push({ ...newNote, id: id });
      savedNote = JSON.stringify(savedNote);
      fs.writeFile('../db/db.json', savedNote, (err, data) => {
        res.sendStatus(200);
      });
    });
  });

  app.delete('/api/notes/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      let deleteNote = JSON.parse(data);
      console.log(deleteNote);
      deleteNote = deleteNote.filter((notes) => notes.id != id);
      console.log(deleteNote);
      deleteNote - JSON.stringify(deleteNote);
      fs.writeFile('./db/db.json', deleteNote, (err, data) => {
        if (err) throw err;
        res.send(deleteNote);
      });
    });
  });
};
