const db = require("../config/db");

exports.getAllNotes = (callback) => {
  //db.query("SELECT * FROM notes ORDER BY created_at DESC", callback);
  db.query("SELECT * FROM notes", callback);
};

exports.getNoteById = (id, callback) => {
  db.query("SELECT * FROM notes WHERE id = ?", [id], callback);
};

exports.createNote = (data, callback) => {
  const { title, description, tag } = data;
  db.query("INSERT INTO notes (title, description, tag) VALUES (?, ?, ?)",
    [title, description, tag], callback);
};

exports.updateNote = (id, data, callback) => {
  const { title, description, tag } = data;
  db.query("UPDATE notes SET title=?, description=?, tag=? WHERE id=?",
    [title, description, tag, id], callback);
};

exports.deleteNote = (id, callback) => {
  db.query("DELETE FROM notes WHERE id = ?", [id], callback);
};
