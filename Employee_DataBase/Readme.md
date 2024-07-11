# Employee CRUD Operations with MongoDB, Node.js, and Express

This project demonstrates CRUD operations for managing employee data using MongoDB as the database, and Node.js with Express for the server-side logic.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project provides a RESTful API to perform CRUD operations on employee data stored in MongoDB. It includes endpoints to add new employees, retrieve employee details, update employee information, and delete employees from the database.

## Features

- **Create Employee**: Add a new employee to the database.
- **Read Employee**: Retrieve employee details based on employee ID.
- **Update Employee**: Modify employee information such as name, designation, department, etc.
- **Delete Employee**: Remove an employee record from the database.
- **List Employees**: Fetch a list of all employees stored in the database.

## Prerequisites

Ensure you have the following installed:

- Node.js
- express.js
- npm (Node Package Manager)
- MongoDB (Make sure MongoDB server is running locally or provide a connection URI)

## Project Structure

├── src/
│ ├── controllers/
│ │ ├── employeeCrud.js
| | ├── index.js
│ ├── models/
│ │ └── employeeSchema.js
│ ├── routes/
│ │ └── routes.js
| | ├── indes.js
│ ├── db/
│   └── db.js
├──app.js
├── package.json
└── README.md


- **src/**: Contains all source code files.
- **controllers/**: Logic for handling HTTP requests and responses.
- **models/**: Defines the schema and methods to interact with MongoDB using Mongoose.
- **routes/**: Defines application routes and maps them to controller methods.
- **config/**: Database configuration and connection setup.
- **server.js**: Entry point of the application.

## Installation

1. Clone the repository:

bash
git clone <repository-url>
cd <project-folder> 


2. Install dependencies:

npm install

## Start the server:
`npm start`

## api-endpoints

1. Create Employee

POST /employees

{
    "name": "John Doe",
    "designation": "Manager",
    "department": "Operations",
    "bloodGroup": "A+",
    "email": "john.doe@example.com",
    "personalDetails": [
        {
            "phoneNo": "1234567890",
            "address": "123 Main Street"
        }
    ]
}


2. Read Employee

PUT /employees/:employeeId

{
    "name": "Updated Name",
    "designation": "Updated Designation",
    "department": "Updated Department"
    // Include other fields to update
}


3. Update Employee

PUT /employees/:employeeId

{
    "name": "Updated Name",
    "designation": "Updated Designation",
    "department": "Updated Department"
    // Include other fields to update
}

4.Delete Employee

DELETE /employees/:employeeId


5. List All Employees

GET /employees


## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose (ODM for MongoDB)
- JavaScript (commonJS )






