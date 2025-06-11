
const db = require('../models/db');

// Get all notes
exports.getAll = async (req, res) => {
  try {
    const [notes] = await db.query('SELECT * FROM notes ORDER BY created_at DESC');
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new note
exports.create = async (req, res) => {
  const { title, description = '', tag = '' } = req.body;

  if (!title?.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    // Check for duplicate title
    const [existing] = await db.query('SELECT id FROM notes WHERE title = ?', [title]);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Title already exists' }); 
    }

    const [result] = await db.query(
      'INSERT INTO notes (title, description, tag) VALUES (?, ?, ?)',
      [title, description, tag]
    );

    const [note] = await db.query('SELECT * FROM notes WHERE id = ?', [result.insertId]);
    res.status(201).json(note[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a note
exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description = '', tag = '' } = req.body;

  if (!title?.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    // Check if another note with same title exists or not
    const [existing] = await db.query(
      'SELECT id FROM notes WHERE title = ? AND id != ?',
      [title, id]
    );
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Title already exists for another note' });
    }

    const [result] = await db.query(
      'UPDATE notes SET title = ?, description = ?, tag = ? WHERE id = ?',
      [title, description, tag, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }

    const [updatedNote] = await db.query('SELECT * FROM notes WHERE id = ?', [id]);
    res.status(200).json(updatedNote[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete a note
exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM notes WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
