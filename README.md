# WebDev-Final-Project
This is the final project for my Web Development class. It is an exercise tracker that allows one to create, delete, or edit
an exercise. This required full-stack functionality.

It utilizes MongoDB for cataloging the database, React for the front-end functionality, and a REST API for the back-end


Exercise Tracker 🏋️‍♀️
A Full-Stack Web Application to Track and Manage Exercise Logs

Table of Contents
Project Overview
Features
Tech Stack
Installation and Setup
Usage
API Endpoints
Project Structure
Contributing
License
1. Project Overview
The Exercise Tracker is a full-stack web application that allows users to create, read, update, and delete exercise logs. Users can track key information like exercise name, reps, weight, unit (kg/lbs), and the date of the workout. This project demonstrates core web development concepts, including CRUD operations, RESTful APIs, and backend-to-database integration.

2. Features
📋 CRUD Functionality: Create, read, update, and delete exercise logs.
🔍 RESTful API: Provides clear, structured endpoints for interacting with exercise data.
🗃️ Database Integration: Uses MongoDB to store and manage exercise records.
🛠️ Validation and Error Handling: Ensures proper request body validation and error responses for API calls.
📡 Modern Tech Stack: Built using Node.js, Express, MongoDB, and Mongoose.
3. Tech Stack
Technology	Purpose
Backend	Node.js, Express (API Server)
Database	MongoDB (Document Storage)
ODM	Mongoose (Schema Management)
Containerization	Docker (Optional for deployment)
Version Control	Git, GitHub
4. Installation and Setup
Follow these instructions to set up the Exercise Tracker on your local machine.

Prerequisites
Make sure you have the following installed:

Node.js (v16 or higher)
MongoDB (Locally installed or cloud-based, e.g., MongoDB Atlas)
Git
Steps to Run Locally
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/exercise-tracker.git
cd exercise-tracker
Install Dependencies

bash
Copy code
npm install
Set Environment Variables
Create a .env file in the project root and set the following variables:

env
Copy code
MONGO_URI=mongodb://localhost:27017/exercise_tracker
PORT=3000
Start MongoDB (if running locally)

bash
Copy code
mongod
Run the Application

bash
Copy code
npm start
Access the Application
Open your browser and visit http://localhost:3000 to use the Exercise Tracker.

5. Usage
Add a New Exercise: Use the form to enter the name, reps, weight, unit (kg/lbs), and date of your workout.
View All Exercises: See a list of all logged exercises.
Edit an Exercise: Update the details of any previously logged exercise.
Delete an Exercise: Remove any unwanted logs from the database.
6. API Endpoints
The backend exposes a RESTful API for interacting with exercise data. Below is a summary of the key endpoints.

Method	Endpoint	Request Body	Response	Description
POST	/exercises	{ name, reps, weight, unit, date }	201: New exercise document	Create a new exercise log
GET	/exercises	None	200: List of all exercises	Retrieve all exercise logs
GET	/exercises/:_id	None	200: Exercise document	Retrieve a specific exercise log by ID
PUT	/exercises/:_id	{ name, reps, weight, unit, date }	200: Updated exercise document	Update an existing exercise log
DELETE	/exercises/:_id	None	204: No response	Delete an exercise log by ID
7. Project Structure
Here's a breakdown of the key files and directories in the Exercise Tracker project.

bash
Copy code
📦 exercise-tracker  
├── 📁 controllers  
│   └── exercises_controller.js  # Handles all request/response logic for exercise routes  
├── 📁 models  
│   └── Exercise.js  # Mongoose schema for exercise data  
├── 📁 routes  
│   └── exercises.js  # API endpoints for exercise CRUD operations  
├── 📄 .env.example  # Example of required environment variables  
├── 📄 .gitignore  # Files and folders to exclude from Git  
├── 📄 package.json  # Node.js project metadata and dependencies  
├── 📄 README.md  # This file (documentation)  
└── 📄 server.js  # Main entry point for the server  
8. Sample API Requests
1. Create a New Exercise (POST /exercises)
Request Body:

json
Copy code
{
  "name": "Push-ups",
  "reps": 30,
  "weight": 0,
  "unit": "bodyweight",
  "date": "2024-12-01"
}
Response (status: 201):

json
Copy code
{
  "_id": "64a1f9b2e6e0d3340e9d3f1e",
  "name": "Push-ups",
  "reps": 30,
  "weight": 0,
  "unit": "bodyweight",
  "date": "2024-12-01T00:00:00.000Z"
}
2. Get All Exercises (GET /exercises)
Response (status: 200):

json
Copy code
[
  {
    "_id": "64a1f9b2e6e0d3340e9d3f1e",
    "name": "Push-ups",
    "reps": 30,
    "weight": 0,
    "unit": "bodyweight",
    "date": "2024-12-01T00:00:00.000Z"
  }
]
3. Update an Exercise (PUT /exercises/:_id)
Request Body:

json
Copy code
{
  "name": "Pull-ups",
  "reps": 15,
  "weight": 0,
  "unit": "bodyweight",
  "date": "2024-12-01"
}
Response (status: 200):

json
Copy code
{
  "_id": "64a1f9b2e6e0d3340e9d3f1e",
  "name": "Pull-ups",
  "reps": 15,
  "weight": 0,
  "unit": "bodyweight",
  "date": "2024-12-01T00:00:00.000Z"
}
4. Delete an Exercise (DELETE /exercises/:_id)
Response (status: 204, no body):

9. Contributing
Contributions are welcome! If you'd like to improve the app or add new features, follow these steps:

Fork the Repository
Create a Branch (git checkout -b feature/your-feature-name)
Commit Your Changes (git commit -m 'Add new feature')
Push to the Branch (git push origin feature/your-feature-name)
Open a Pull Request
10. License
This project is licensed under the MIT License.
