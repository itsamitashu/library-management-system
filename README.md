# 📚 Library Management System (MERN Stack)

A full-stack Library Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to register, login, and manage books efficiently.

---

## 🚀 Live Demo

### 🌐 Frontend (User Interface)

https://library-frontend-gs98.onrender.com

### ⚙️ Backend (API Server)

https://library-backend-qxzb.onrender.com

---

## 💻 GitHub Repository

https://github.com/itsamitashu/library-management-system

---

## ✨ Features

* 🔐 User Authentication (Register & Login using JWT)
* 📚 Add New Books
* 📖 View All Books
* 🗑️ Delete Books
* 📊 Dashboard with Book Statistics
* 🌐 Fully Responsive UI (Mobile + Desktop)
* ☁️ Deployed on Render

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* React Router DOM
* Axios
* CSS (Custom Styling)

### Backend:

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* dotenv

---

## ⚙️ Installation (Run Locally)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/itsamitashu/library-management-system.git
cd library-management-system
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run server
```

Create `.env` file inside backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

### Auth Routes

* POST `/api/users/register`
* POST `/api/users/login`

### Book Routes

* POST `/api/books/add`
* GET `/api/books`
* DELETE `/api/books/:id`

---

## 📸 Screenshots

* Login Page
* Register Page
* Dashboard
* Book Management

---

## 👨‍💻 Author

**Amit Kumar**
B.Tech Student

---

## 📌 Project Description (For Viva)

This is a MERN Stack based Library Management System that allows users to register, login, and manage books using CRUD operations. The backend is built with Node.js and Express, connected to MongoDB Atlas using Mongoose, and the frontend is built using React. The project is deployed on Render for both frontend and backend.

---

## ⭐ Future Improvements

* Edit Book Feature
* Search & Filter Books
* Role-based Authentication (Admin/User)
* Issue/Return Book System

---

## 📄 License

This project is for educational purposes only.
