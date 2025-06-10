const Note = require('../models/noteModel');

exports.getNotes = (req, res) => {
  Note.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createNote = (req, res) => {
  const data = req.body;
  Note.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Note added successfully', id: result.insertId });
  });
};

exports.updateNote = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Note.update(id, data, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Note updated successfully' });
  });
};

exports.deleteNote = (req, res) => {
  const id = req.params.id;
  Note.delete(id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Note deleted successfully' });
  });
};
