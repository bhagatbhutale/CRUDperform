
📍 Setup Instructions :
               npm install
project run :- nodemon index.js

git clone https://github.com/bhagatbhutale/CRUDperform.git



📚 Build a RESTful API with MongoDB using Node.js and Express

🚀 This project enhances previous work by integrating MongoDB, testing concepts like database interaction, CRUD operations, and middleware handling using Node.js, Express, and Mongoose.

📋 Requirements & Objectives
🔗 1. MongoDB Integration 
✅ Connect Database:
Use Mongoose to connect Node.js application with MongoDB.

✅ Create Schema:
Define a User Schema with fields and proper validations (like required fields, minimum/maximum length, etc.)

🛠️ 2. Define RESTful API Routes 

Method	   Endpoint	                   Description
GET	       /users	            Fetch all users from the database
GET	       /user/:id	        Fetch a specific user by ObjectId
POST	   /user	            Add a new user to the database
PUT	       /user/:id	        Update an existing user's details
DELETE	   /user/:id	        Delete a user by their ObjectId

📢 Notes
Use Postman or Thunder Client for testing APIs.

⚙️ Technologies Used
- Node.js 🟩
- Express.js 🚂
- MongoDB 🍃
- Mongoose 🧵
- Thunder 
- Postman

🧩 Key Features
🔥 RESTful API Architecture
🔥 Mongoose ODM Integration
🔥 CRUD Operations (Create, Read, Update, Delete)
🔥 Middleware Handling (Validation, Error Handling)
🔥 MongoDB Connection using Environment Variables


🚦 API Status Codes
Code	Meaning
200	    OK - Successful operation
201	    Created - New resource added
400	    Bad Request - Invalid data
404	    Not Found - Resource missing
500	    Internal Server Error