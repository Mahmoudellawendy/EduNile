# EduNile – Egyptian E-Learning Platform

**EduNile** is an Egyptian online learning platform designed to provide simplified and locally relevant online courses for Egyptian students. The platform allows users to browse available courses, create an account or log in, watch course videos, take short quizzes, write reviews, track their progress, save courses to a wishlist, and view statistics on their dashboard. This project is built using React and Bootstrap 5 for styling.

## Project Structure
EduNile/
├── src/
│   ├── assets/                # Images & icons
│   ├── components/            # Navbar, Footer, Cards, etc.
│   ├── pages/                 # Home, Courses, Login, Register, Dashboard
│   ├── data/                  # Mock JSON data (courses, users, etc.)
│   ├── context/               # Context API for Authentication
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── node_modules/
├── package.json
├── bootstrap.min.css
└── vite.config.js / webpack.config.js

## Features
Completed (Week 1): Project initialized with React + Vite, Bootstrap 5 installed and configured, basic folder structure created (components, pages, assets, data), Navbar, Footer, and HomePage created, responsive layout implemented using Bootstrap, local development server running successfully, initial UI tested (colors, buttons, typography).

Upcoming (Week 2+): Authentication (Login & Register pages), Routing (navigate between Home, Courses, Login, Dashboard), Core Features (Course listing, course details, video player, enrollment), Quizzes & Reviews (Simple quizzes, reviews, progress tracking), Styling & Deployment (full responsiveness, UI polishing, deployment on Netlify/Vercel).

## Components & Pages
Pages: Home.jsx (Homepage), Courses.jsx (Course catalog), CourseDetails.jsx (Individual course details), Login.jsx (Login page), Register.jsx (Sign-up page), Dashboard.jsx (User progress and statistics).

Components: Navbar.jsx (Navigation bar), Footer.jsx (Footer), CourseCard.jsx (Card for individual courses), PrivateRoute.jsx (Protect pages for authenticated users), LessonPlayer.jsx (Video player for lessons), Quiz.jsx (Simple quiz component), ReviewForm.jsx (Form to submit reviews).

## Colors & Fonts
Primary Color: Dark Blue (#2563EB), Background: Light Gray (#F9FAFB), Text: Dark Gray (#1F2937), Secondary Buttons: Medium Gray (#E5E7EB), Accent: Yellow (#FACC15), Font: Inter / Sans-serif (Bootstrap default).

## Development Timeline
Week 1: Planning & Setup – React project setup, Bootstrap, basic layout, Navbar, Footer, HomePage ✅ Completed  
Week 2: Authentication & Layout – Login/Register pages, Routing, general layout 🔜 Upcoming  
Week 3: Core Features – Courses page, course details, video player, enrollment ⏳ Upcoming  
Week 4: Quizzes & Reviews – Quizzes, reviews, Dashboard statistics ⏳ Upcoming  
Week 5: Styling & Deployment – UI polish, responsive design, testing, deployment ⏳ Upcoming

## Installation
1. Clone the repository: `git clone <your-repo-link>`  
2. Install dependencies: `npm install`  
3. Run the project: `npm run dev`

## Contributing
This project is built as a capstone project. Contributions are welcome for improvements, bug fixes, and UI enhancements.

## Notes
This project is developed using React + Bootstrap 5. Data is initially loaded from mock JSON files; APIs can be integrated later. Responsive design is implemented for both desktop and mobile.
