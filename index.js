// require mongoose
const mongoose = require("mongoose");

// connect to the local server
mongoose.connect("mongodb://127.0.0.1:27017");
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