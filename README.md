 # React URL Shortener Web App

A fully client-side URL Shortener application built using React. This project allows users to shorten long URLs with optional expiry times and custom shortcodes, track clicks on shortened links, and view basic analytics — all without requiring a backend.

---

## Features

- Client-side only — No backend required
- Shorten up to 5 URLs at once with:
  - Optional expiry time (in minutes)
  - Optional custom shortcode
- Redirection handled using React Router (/:shortcode)
- Statistics tracking:
  - Total clicks per short link
  - Timestamp, source, and location (mocked)
- Auto-expiry after provided time or 30 minutes by default
- Data stored in localStorage
- Clean and user-friendly UI (pure CSS based styling)
- Custom logger middleware used (no console.log)

---

## Project Structure

src/
├── components/
│ ├── UrlInputForm.jsx
│ ├── ShortenedUrlCard.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Stats.jsx
│ ├── Redirect.jsx
│
├── utils/
│ ├── storage.js
│ ├── logger.js
│ ├── validators.js
│ ├── shortener.js
│
├── styles/
│ ├── App.css
│
├── App.js
├── index.js

yaml
Copy
Edit

---

## How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener-app.git
cd url-shortener-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm start
Application will run on: http://localhost:3000

Usage Guide
Home Page (/)
Add up to 5 URLs with optional expiry time and custom shortcode

Press "Shorten URLs" to generate shortened links

View and copy the shortened URLs along with creation and expiry info

Redirection (/:shortcode)
Visiting a shortened URL like http://localhost:3000/xyz123 redirects to the original URL

Click is logged with mock timestamp, source, and location

Statistics Page (/stats)
View all generated shortened URLs

See number of clicks, creation/expiry times, and full click history

Technical Highlights
React + React Router DOM for SPA routing

All business logic handled in-browser

localStorage used for storing URLs and analytics

Unique shortcodes auto-generated (6 characters)

Input validation for URL, validity, and shortcode

Default validity set to 30 minutes if not specified

Data Storage Format
Data is stored in localStorage:

shortenedUrls: array of { originalUrl, shortUrl, createdAt, expiresAt, clicks }

clickLogs: object mapping shortcode to click metadata array

Author
Name: Kola Keerthi Kumar

Project: Frontend Mini Project (Campus Evaluation)

Stack: React, JavaScript, CSS

Date: July 2025

License
This project is intended for educational purposes and academic evaluation only.
All rights reserved.

 

---

Screenshots

<img width="1221" height="961" alt="image" src="https://github.com/user-attachments/assets/3f3dcffb-2291-46fd-a143-810af7f084d7" />
