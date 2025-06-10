const db = require('../config/db');

const Note = {
  getAll: (callback) => {
    db.query('SELECT * FROM notes', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM notes WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO notes SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE notes SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM notes WHERE id = ?', [id], callback);
  },
};

module.exports = Note;
