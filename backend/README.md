# Backend API

This is the backend API for user management.

# AutoDeploy Backend

This directory contains the backend application for AutoDeploy, built with Node.js and Express.

## Installation

1. Navigate to the `backend` directory:
cd backend

2. Install dependencies:
npm install

# Running the Application

1. Start the server:
node src/app.js

2. The server will run on http://localhost:5000.

## Features

- User Management: Create and retrieve users.
- Authentication: Middleware for securing endpoints.
- Logging: Logging using Winston.

## Technologies Used

- Node.js: JavaScript runtime environment.
- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling for Node.js.
- Winston: Logging library.

## Environment Variables

Create a .env file in the backend directory with the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
