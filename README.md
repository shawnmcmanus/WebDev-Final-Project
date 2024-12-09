# WebDev Final Project

🏋️‍♀️ Exercise Tracker: A Full-Stack Web Application to Track and Manage Exercise Logs

📚 Table of Contents

📖 Project Overview

✨ Features

🛠️ Tech Stack

📦 Installation and Setup

🚀 Usage

📡 API Endpoints

🤝 Contributing

📜 License

📖 Project Overview:
---
The Exercise Tracker is a full-stack web application that allows users to create, read, update, and delete exercise logs. Users can track key information such as:

Exercise Name, Reps, Weight, Unit (kg/lbs), Date of Workout

This project demonstrates core web development concepts, including CRUD operations, RESTful APIs, and backend-to-database integration.

✨ Features:
---
📋 CRUD Functionality: Create, read, update, and delete exercise logs.

🔍 RESTful API: Provides structured endpoints for interacting with exercise data.

🗃️ Database Integration: Uses MongoDB to store and manage exercise records.

🛠️ Validation and Error Handling: Ensures proper request body validation and error responses for API calls.

🌐 Modern Tech Stack: Built using Node.js, Express, MongoDB, and Mongoose.

🛠️ Tech Stack:
---
Technology	Purpose

Backend	Node.js, Express (API Server)

Database	MongoDB (Document Storage)

ODM	Mongoose (Schema Management)

Containerization	Docker (Optional for deployment)
Version Control	Git, GitHub

📦 Installation and Setup:
---
You can follow these instructions to set up the Exercise Tracker on your local machine.

📋 Prerequisites:

Make sure you have the following installed:

Node.js (v16 or higher)

MongoDB (Locally installed or cloud-based, e.g., MongoDB Atlas)

REST Client (v25 or higher)

🚀 Steps to Run Locally:

Clone the Repository

npm install for REST and React folders

npm start for REST folder (make sure PORT = 3000)

npm run dev for React folder (should be in a separate terminal than REST)

Access the Application:

Open your browser and visit http://localhost:5173 to use the Exercise Tracker.

🚀 Usage:
---
Add a New Exercise: Use the form to enter the exercise name, reps, weight, unit (kg/lbs), and workout date.

View All Exercises: See a list of all logged exercises at the home page.

Edit an Exercise: Update the details of any previously logged exercise.

Delete an Exercise: Remove any unwanted logs from the database.

📡 API Endpoints:
---
The backend exposes a RESTful API for interacting with exercise data. Below is a summary of the key endpoints.

Method	Endpoint	Request Body	Response	Description:

POST	/exercises	{ name, reps, weight, unit, date }	201: New exercise document	Create a new exercise log

GET	/exercises	None	200: List of all exercises	Retrieve all exercise logs

GET	/exercises/:_id	None	200: Exercise document	Retrieve a specific exercise log by ID

PUT	/exercises/:_id	{ name, reps, weight, unit, date }	200: Updated exercise document	Update an existing exercise log

DELETE	/exercises/:_id	None	204: No response	Delete an exercise log by ID

🤝 Contributing:
---
Contributions are welcome! If you'd like to improve the app or add new features, follow these steps:

Fork the Repository

Create a Branch (git checkout -b feature/your-feature-name)

Commit Your Changes (git commit -m 'Add new feature')

Push to the Branch (git push origin feature/your-feature-name)

Open a Pull Request

📜 License:
---
This project is licensed under the MIT License.








