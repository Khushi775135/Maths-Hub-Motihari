const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, class: studentClass, phone, email, message } = req.body;
    
    // Validation
    if (!name || !studentClass || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, Class, and Phone are required fields' 
      });
    }
    
    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid 10-digit phone number' 
      });
    }
    
    const result = await db.submitInquiry(name, studentClass, phone, email, message);
    
    res.json({ 
      success: true, 
      message: 'Thank you for your inquiry! We will contact you soon.',
      inquiryId: result.lastInsertRowid
    });
    
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

// Get all inquiries (Admin)
app.get('/api/inquiries', async (req, res) => {
  try {
    const inquiries = await db.getInquiries();
    res.json({ success: true, data: inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
});

// Get batches
app.get('/api/batches', async (req, res) => {
  try {
    const batches = await db.getBatches();
    res.json({ success: true, data: batches });
  } catch (error) {
    console.error('Error fetching batches:', error);
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
});

// Update batch (Admin)
app.put('/api/batches/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { timing, status, current_students } = req.body;
    
    await db.updateBatch(id, { timing, status, current_students });
    
    res.json({ success: true, message: 'Batch updated successfully' });
  } catch (error) {
    console.error('Error updating batch:', error);
    res.status(500).json({ success: false, message: 'Error updating batch' });
  }
});

// Delete inquiry (Admin)
app.delete('/api/inquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.deleteInquiry(id);
    res.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ success: false, message: 'Error deleting inquiry' });
  }
});

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve admin page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Infinity Mathematics Academy Server running on http://localhost:${PORT}`);
});
