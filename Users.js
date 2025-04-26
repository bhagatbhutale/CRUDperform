const mongoose = require("mongoose");
// users Schema and it Require Validates this all Scehema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength : 20,
  },
  age: {
    type: Number,
    required: true,
  },
  isAdult: {
    type: Boolean,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
