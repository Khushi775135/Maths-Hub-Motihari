const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'infinity_math.db');
const db = new sqlite3.Database(dbPath);

// Initialize database with tables
db.serialize(() => {
  // Create inquiries table
  db.run(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      class TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create batches table
  db.run(`
    CREATE TABLE IF NOT EXISTS batches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_level TEXT NOT NULL,
      session TEXT NOT NULL,
      timing TEXT NOT NULL,
      duration TEXT DEFAULT '1.5 Hours',
      max_students INTEGER DEFAULT 6,
      current_students INTEGER DEFAULT 0,
      status TEXT DEFAULT 'Open',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Check if batches exist and insert defaults
  db.get('SELECT COUNT(*) as count FROM batches', (err, row) => {
    if (row.count === 0) {
      const insertBatch = db.prepare(`
        INSERT INTO batches (class_level, session, timing, status) VALUES (?, ?, ?, ?)
      `);
      
      insertBatch.run('Class 11', 'Morning', '6:00 AM - 7:30 AM', 'Limited Seats');
      insertBatch.run('Class 11', 'Afternoon', '12:00 PM - 1:30 PM', 'Limited Seats');
      insertBatch.run('Class 11', 'Evening', '3:00 PM - 4:30 PM', 'Limited Seats');
      insertBatch.run('Class 12', 'Morning', '7:00 AM - 8:30 AM', 'Limited Seats');
      insertBatch.run('Class 12', 'Afternoon', '1:00 PM - 2:30 PM', 'Limited Seats');
      insertBatch.run('Class 12', 'Evening', '4:00 PM - 5:30 PM', 'Limited Seats');
      insertBatch.finalize();
      console.log('Default batches created');
    }
  });
});

// Helper functions to make it compatible with the API
const dbAPI = {
  // Submit inquiry
  submitInquiry: (name, studentClass, phone, email, message) => {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare(`
        INSERT INTO inquiries (name, class, phone, email, message)
        VALUES (?, ?, ?, ?, ?)
      `);
      stmt.run(name, studentClass, phone, email || '', message || '', function(err) {
        if (err) reject(err);
        else resolve({ lastInsertRowid: this.lastID });
      });
      stmt.finalize();
    });
  },

  // Get all inquiries
  getInquiries: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM inquiries ORDER BY created_at DESC', (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  // Delete inquiry
  deleteInquiry: (id) => {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM inquiries WHERE id = ?', id, function(err) {
        if (err) reject(err);
        else resolve({ changes: this.changes });
      });
    });
  },

  // Get all batches
  getBatches: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM batches ORDER BY class_level, session', (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  // Update batch
  updateBatch: (id, updates) => {
    return new Promise((resolve, reject) => {
      let query = 'UPDATE batches SET ';
      const params = [];
      
      if (updates.timing) {
        query += 'timing = ?, ';
        params.push(updates.timing);
      }
      if (updates.status) {
        query += 'status = ?, ';
        params.push(updates.status);
      }
      if (updates.current_students !== undefined) {
        query += 'current_students = ?, ';
        params.push(updates.current_students);
      }
      
      query = query.slice(0, -2) + ' WHERE id = ?';
      params.push(id);
      
      db.run(query, params, function(err) {
        if (err) reject(err);
        else resolve({ changes: this.changes });
      });
    });
  }
};

module.exports = dbAPI;
