const Note = require("../models/noteModel");

exports.getNotes = (req, res) => {
  Note.getAllNotes((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getNote = (req, res) => {
  Note.getNoteById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
};

exports.createNote = (req, res) => {
  Note.createNote(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Note created", id: result.insertId });
  });
};

exports.updateNote = (req, res) => {
  Note.updateNote(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Note updated" });
  });
};

exports.deleteNote = (req, res) => {
  Note.deleteNote(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Note deleted" });
  });
};
