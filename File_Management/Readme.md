# Node.js + Express CRUD Operations for File Handling

This project demonstrates CRUD (Create, Read, Update, Delete) operations using Node.js and Express for file handling.


## Start the server 
`npm run dev`

## API Endpoints

1. Create New File (POST Method)

POST http://localhost:3000/write-file

{
    "filename": "newFile1.txt",
    "data": "Hey, I am a new file!"
}

2. Update File (PUT Method)

PUT http://localhost:3000/update-file

{
    "filename": "newFile1.txt",
    "data": "Updated content..."
}

2. Delete File (DELETE Method)

DELETE http://localhost:3000/delete-file

{
    "filename": "newFile1.txt"
}

4. List All Files (GET Method)

GET http://localhost:3000/ls-file

5. Read File (POST Method)

POST http://localhost:3000/read-file

{
    "filename": "newFile1.txt"
}

## Project Structure

├── src/
│ ├── controllers/
│ │ ├── fileOperations.js
| | ├── index.js
│ ├── models/
│ │ └── fileSchema.js
│ ├── routes/
│ │ └── routes.js
| | ├── indes.js
│ ├── config/
│   └── config.js
├──app.js
├── package.json
└── README.md

## Technologies Used
Node.js
Express
fs (File System)
JavaScript (commonJS )
