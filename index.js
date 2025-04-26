const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017");

const db =  mongoose.connection;

db.on("open", () => {
    console.log("Connected to MongoDb database Successfully...");
})

db.on("error", () => {
    console.log("Connection Not Successful !")
} )