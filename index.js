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

// home route - checking the server is run or not
app.get("/", (req, res) => {
    res.status(200).send("Welcome to The Home Page of the CRUD API");
})

// users route - get all users  ---------------------------------------------
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.status(200).send({ message : "All users in MongoDB compass", users : users });
})

// users route - get single user searching id specific user
app.get("/users/:id", async (req, res) => {
    // url id store in id variable
 const id = req.params.id;
 // find id in User collection
 const user = await User.findById(id);
 if(!user) {
    return res.status(404).send({message : "User Not found"})
 }

 res.status(200).send({message : " user found", user : user})

})




