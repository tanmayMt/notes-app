CREATE DATABASE IF NOT EXISTS notes_db;

USE notes_db;

CREATE TABLE IF NOT EXISTS notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  tag VARCHAR(100),
  -- timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
