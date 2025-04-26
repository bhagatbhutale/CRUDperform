// require mongoose

const express = require("express");

const mongoose = require("mongoose");
const User = require("./Users");

const app = express();

app.use(express.json());

app.listen(6001, (req, res) => {
    console.log("Server is running on post 6001");
})


// connect to the local server
mongoose.connect("mongodb://127.0.0.1:27017/crud");
// storing connection in db
const db =  mongoose.connection;
// check connection success
db.on("open", () => {
    console.log("Connected to MongoDb database Successfully...");
})
// check connection error occruu
db.on("error", () => {
    console.log("Connection Not Successful !")
} )
// -------------------------------------------------------------------

// get all users 
// async function getAllUsers() {
//     try {
//         const users = User.find({});
//         response.send(users);
//     } catch (error) {
//         res.status(500).send({message : "Error Fecthing users "})
//     }
// }