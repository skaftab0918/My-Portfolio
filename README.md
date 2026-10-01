# Aftab Shaikh — Developer Portfolio

A modern and responsive personal portfolio website built with **React, Vite, and Tailwind CSS**.

The portfolio showcases my skills, featured projects, development journey, and contact information.

## 🚀 Live Website

**Portfolio:** Add your deployed portfolio URL here

## 👨‍💻 About

Hi, I'm **Aftab Shaikh**, a Frontend / MERN Stack Developer from Mumbai, India.

I enjoy building responsive, user-friendly web applications using modern web technologies, with a focus on **React.js, JavaScript, and the MERN stack**.

I'm currently looking for entry-level opportunities where I can contribute to real-world projects and continue growing as a developer.

## 🛠️ Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* HTML5
* CSS3
* Redux
* Node.js
* Express.js
* MongoDB
* REST APIs
* Git & GitHub

## ✨ Features

* Responsive design
* Modern UI
* Dark theme
* Smooth scrolling
* Interactive project showcase
* Featured projects section
* GitHub and LinkedIn integration
* Resume download
* Contact form
* SEO-friendly structure
* Accessible UI
* Mobile-friendly navigation

## 📂 Featured Projects

### 1. Trrip — AI Travel Itinerary Generator

An AI-powered travel itinerary application that extracts information from uploaded travel documents and generates structured travel itineraries.

**Tech:** React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Gemini API, JWT, Multer

[View Repository](https://github.com/skaftab0918/Travel-Ai-Itinerary)

### 2. StudyNotion — EdTech Platform

A full-stack EdTech platform for course creation, course consumption, user dashboards, payments, and other learning features.

**Tech:** React.js, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Razorpay, Cloudinary

[View Repository](https://github.com/skaftab0918/StudyNotion)

### 3. ChatApp — Real-Time Chat Application

A real-time messaging application supporting one-to-one and group conversations.

**Tech:** React.js, Socket.IO, Redis

[View Repository](https://github.com/skaftab0918/ChatApp)

### 4. Personal Finance Manager

A finance management application for tracking expenses and visualizing financial data through interactive dashboards and charts.

**Tech:** MERN Stack, Chart.js, Socket.IO, Redis

[View Repository](https://github.com/skaftab0918/Personal_Finance_Manager)

## 📁 Project Structure

```text
src/
├── components/
├── sections/
├── data/
│   ├── site.js
│   └── projects.js
├── assets/
├── hooks/
├── App.jsx
└── main.jsx

public/
├── projects/
└── Aftab-Shaikh-Resume.pdf
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone <your-portfolio-repository-url>
```

Navigate to the project:

```bash
cd <your-project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## ✏️ Customization

### Site Information

Update your:

* Email
* GitHub URL
* LinkedIn URL
* Resume path
* Contact form endpoint

in:

```text
src/data/site.js
```

### Skills

Update your skills in:

```text
src/data/site.js
```

### Projects

Add, remove, or reorder projects in:

```text
src/data/projects.js
```

### Project Screenshots

Place project screenshots inside:

```text
public/projects/
```

Example:

```text
public/projects/trrip.png
public/projects/studynotion.png
public/projects/chatapp.png
public/projects/personal-finance.png
```

Then update the corresponding project in `projects.js`:

```javascript
image: "/projects/trrip.png"
```

### Resume

Place your resume PDF here:

```text
public/Aftab-Shaikh-Resume.pdf
```

### Contact Form

Set your form endpoint in:

```text
src/data/site.js
```

For example, you can use a service such as Formspree.

Alternatively, update the `sendMessage()` function in:

```text
src/sections/Contact.jsx
```

## 🌐 Deployment

This portfolio can be easily deployed using **Vercel**.

### Deploy with Vercel

1. Push the project to GitHub.
2. Go to Vercel.
3. Import your GitHub repository.
4. Select **Vite** as the framework if it is not detected automatically.
5. Click **Deploy**.

Vercel will build and deploy the portfolio automatically.

## 📬 Connect With Me

**GitHub:**
https://github.com/skaftab0918

**LinkedIn:**
https://www.linkedin.com/in/aftabshaikh-dev/

## 📄 License

This project is for personal portfolio purposes.

Feel free to use the structure or ideas for inspiration, but please replace the personal information, projects, and assets with your own.

---

⭐ If you found this project useful, feel free to check out my other repositories on [GitHub](https://github.com/skaftab0918).
