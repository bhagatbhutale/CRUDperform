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
 // user not found
 res.status(200).send({message : " user found", user : user})
})


// post route - add a newUser in the Database 
app.post("/user", async (req, res) => {
    // get value from req.body
    const { name , age, isAdult, city } = req.body
    const newUser = await User.create({
        name : name,
        age : age,
        isAdult : isAdult,
        city : city
    })
    // save newUser
newUser.save()
// send all users in response
res.status(201).send({message : "User Created is Successfully", users : await User.find()})
   
})


// put route - update the exixting the user 
app.put("/user/:id", async (req, res) => {

    // get the url id
    const { id } = req.params;
    // req body values
    const { name, age, isAdult, city} = req.body;

    // get the idObject and update the use
    const updateUser = await User.findByIdAndUpdate(id, {name, age, isAdult, city}, { new: true })

    // user updated send
    res.status(200).send(updateUser);

})


// delete route - delete the user usinng id 

app.delete("/user/:id", async (req, res) => {
    const id = req.params.id;

    const deleteUser = await User.findByIdAndDelete(id)


    res.status(200).send({ message : "User Deleted Successfully ", deleteUser : deleteUser, users : await User.find()})
})




