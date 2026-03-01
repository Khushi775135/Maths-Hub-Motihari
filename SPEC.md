# Infinity Mathematics Academy - Website Specification

## Project Overview
- **Project Name**: Infinity Mathematics Academy Website
- **Type**: Premium Educational Institution Website with Backend
- **Core Functionality**: Marketing website for mathematics tuition institute with contact form, batch information, and admin management
- **Target Users**: Bihar Board students (Class 11 & 12), parents, and guardians

## Theme & Visual

### Color Palette Design
- **Primary Dark**: #0a0e27 (Deep Navy)
- **Primary**: #0d1b3d (Dark Blue)
- **Secondary**: #1a3a6e (Royal Blue)
- **Accent**: #00d4ff (Cyan Glow)
- **Accent Secondary**: #7c3aed (Purple)
- **Gold Accent**: #ffd700 (Premium Gold)
- **Text Primary**: #ffffff
- **Text Secondary**: #a0aec0
- **Glass Background**: rgba(255, 255, 255, 0.05)
- **Glass Border**: rgba(255, 255, 255, 0.1)

### Typography
- **Heading Font**: 'Orbitron' (Futuristic, premium feel)
- **Body Font**: 'Exo 2' (Modern, readable)
- **Accent Font**: 'Cinzel' (Elegant, prestigious)
- **Heading Sizes**: 
  - H1: 4rem (Hero)
  - H2: 3rem (Section titles)
  - H3: 1.5rem (Cards)
- **Body Size**: 1rem / 1.125rem

### Visual Effects
- Glassmorphism cards with backdrop blur
- 3D floating mathematical symbols
- Particle background
- Smooth parallax scrolling
- Hover 3D tilt effects
- Animated counters
- Gradient text with shine effects
- Glowing borders and buttons

## UI Components

### Header
- Fixed glassmorphism navigation
- Logo with animated glow
- Navigation links with hover underline animation
- Mobile hamburger menu
- CTA button

### Hero Section
- Full viewport height
- Animated particle background
- 3D rotating math symbols (π, ∑, ∫, √, ∞)
- Big animated heading
- Subheading with typewriter effect
- Dual CTA buttons with glow effects

### Cards (Batch, Features, Testimonials)
- Glassmorphism effect
- 3D hover tilt animation
- Gradient border on hover
- Smooth transitions
- Icon animations

### Buttons
- Primary: Gradient background with glow
- Secondary: Transparent with border
- Hover: Scale and glow effects
- Active: Press effect

## Sections Specification

### 1. HERO SECTION
- Animated gradient background
- 3D floating math symbols with rotation
- Main heading: "Bihar Board's Premier Mathematics Coaching for 11th & 12th"
- Subheading: "Small Batches | Personal Attention | Concept Mastery"
- CTA: "Enroll Now" (Primary), "View Batches" (Secondary)
- Scroll indicator animation

### 2. ABOUT ACADEMY
- Glassmorphism card
- Two-column layout (text + animated 3D visual)
- Focus points with animated icons
- Bihar Board syllabus mention

### 3. WHY CHOOSE US
- 8 feature cards in grid
- Each card with icon animation
- Hover 3D effect
- Features: Only Mathematics, 6 Students/Batch, 1.5 Hour Sessions, Weekly Tests, Performance Tracking, Doubt Clearing, Affordable Fees, Safe Environment

### 4. BATCH INFORMATION
- 6 animated cards (2 rows × 3 columns on desktop)
- Each card shows:
  - Class (11/12)
  - Session (Morning/Afternoon/Evening)
  - Timing
  - Duration: 1.5 Hours
  - Max Students: 6
  - Status badge
  - Animated Enroll button
- 3D hover effect on each card

### 5. COURSES COVERED
- Two columns (Class 11 & Class 12)
- Animated list items with formula illustrations
- Slide-in animations

### 6. FACILITIES
- 5 facility cards with icons
- Image slider/slider component
- Glassmorphism design

### 7. PERFORMANCE STATS
- 4 animated counters
- Number animation on scroll
- Icons with pulse effect

### 8. GALLERY
- CSS Grid masonry layout
- Hover zoom effect
- 3D tilt on hover

### 9. TESTIMONIALS
- Auto-sliding carousel
- 3 testimonials
- Navigation dots
- Quote styling

### 10. CONTACT
- Address card
- Embedded Google Maps
- Contact form with validation
- WhatsApp and Call buttons (floating)

### 11. FOOTER
- 4 columns (About, Quick Links, Batches, Contact)
- Social media icons
- Copyright 2026

## Frontend Tech Stack
- HTML5
- CSS3 (Custom + Variables)
- JavaScript (Vanilla)
- Three.js (3D animations)
- Scroll animations (Intersection Observer)

## Backend Specification

### Tech Stack
- Node.js + Express.js
- SQLite (for simplicity)
- EJS (template engine) or serving static files

### Features
- Contact form API endpoint
- SQLite database for inquiries
- Admin panel route
- Input validation
- CORS enabled
- API routes:
  - POST /api/contact - Submit inquiry
  - GET /api/inquiries - View inquiries (admin)
  - GET /admin - Admin dashboard

### Database Schema
```
sql
CREATE TABLE inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  class TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## SEO Requirements
- Meta title: "Infinity Mathematics Academy - Best Maths Coaching for Bihar Board Class 11 & 12"
- Meta description: "Premier mathematics tuition in Bihar. Expert coaching for Class 11 & 12 Bihar Board. Small batches of 6 students, personal attention, concept mastery."
- Keywords: Bihar Board Maths Coaching, Class 11 Maths Tuition, Class 12 Maths Coaching, Best Maths Tuition in Bihar
- Open Graph tags
- Favicon

## File Structure
```
maths-hub-motihari/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── server.js
├── database.js
├── package.json
├── .env
└── SPEC.md
```

## Animation Specifications

### Hero 3D Symbols
- Floating animation (translateY)
- Rotation animation (rotate3d)
- Staggered delay
- Three.js or CSS 3D transforms

### Scroll Animations
- Fade in up
- Slide in left/right
- Scale in
- Stagger children

### Counter Animation
- Count from 0 to target
- Duration: 2 seconds
- Easing: ease-out
- Trigger: On scroll into view

### Hover Effects
- 3D tilt (perspective transform)
- Scale: 1.05
- Box shadow glow
- Border gradient

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Lighthouse Score: > 90
