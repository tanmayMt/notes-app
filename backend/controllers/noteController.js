const db = require('../models/db');

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM notes');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  // const { title, description, tag } = req.body;
  const { title, description = '', tag = '' } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  try {
    const [result] = await db.query(
      'INSERT INTO notes (title, description, tag) VALUES (?, ?, ?)',
      [title, description, tag]
    );
    const [newNote] = await db.query('SELECT * FROM notes WHERE id = ?', [result.insertId]);
    res.status(201).json(newNote[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  //const { title, description, tag } = req.body;
  const { title, description = '', tag = '' } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE notes SET title = ?, description = ?, tag = ? WHERE id = ?',
      [title, description, tag, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Note not found' });
    const [updated] = await db.query('SELECT * FROM notes WHERE id = ?', [id]);
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  const id = req.params.id;
  try {
    const [result] = await db.query('DELETE FROM notes WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
