# Infinity Mathematics Academy Website

A premium, highly animated 3D modern website for a Mathematics Tuition Institute.

## Features

### Frontend
- **3D Animations**: Three.js powered particle background with floating mathematical symbols
- **Glassmorphism Design**: Modern dark blue + royal blue gradient theme
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Smooth Animations**: Scroll animations, hover effects, 3D tilt cards
- **Interactive Elements**: Animated counters, testimonials slider, contact form

### Sections
1. Hero Section - 3D animated background with floating math symbols
2. About Academy - Professional description with Bihar Board focus
3. Why Choose Us - 8 feature cards with animated icons
4. Batch Information - 6 animated batch cards (Class 11 & 12)
5. Courses Covered - Complete Bihar Board syllabus
6. Facilities - Air conditioned, smart board, study materials
7. Performance Stats - Animated counters (500+ students, 95% result)
8. Testimonials - Auto-sliding carousel
9. Contact - Form with validation, map, WhatsApp/Call buttons
10. Footer - Quick links, contact info, social icons

### Backend
- **Node.js + Express**: Fast and efficient server
- **SQLite Database**: Stores inquiries and batch information
- **RESTful API**: Contact form submission, admin management
- **Admin Panel**: View inquiries, manage batches

## Tech Stack
- HTML5, CSS3, JavaScript (Vanilla)
- Three.js for 3D animations
- Node.js + Express.js
- SQLite database

## Installation

```
bash
# Install dependencies
npm install

# Start the server
npm start
```

## Access

- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## Project Structure

```
maths-hub-motihari/
├── public/
│   ├── index.html      # Main website
│   └── admin.html      # Admin panel
├── server.js           # Express server
├── database.js         # SQLite database
├── package.json        # Dependencies
├── .env               # Environment config
└── README.md          # This file
```

## Contact Form API

```
javascript
// POST /api/contact
{
  "name": "John Doe",
  "class": "Class 11",
  "phone": "9876543210",
  "email": "john@example.com",
  "message": "I want to enroll"
}
```

## Admin API Endpoints

- `GET /api/inquiries` - Get all inquiries
- `DELETE /api/inquiries/:id` - Delete inquiry
- `GET /api/batches` - Get all batches
- `PUT /api/batches/:id` - Update batch

## Design Specifications

- **Theme**: Dark Blue + Royal Blue Gradient
- **Fonts**: Orbitron (headings), Exo 2 (body), Cinzel (accent)
- **Primary Color**: #00d4ff (Cyan)
- **Secondary Color**: #7c3aed (Purple)
- **Gold Accent**: #ffd700

## License

Copyright © 2026 Infinity Mathematics Academy. All rights reserved.
