const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
  },
  password: { type: String, required: [true, "Please enter a password"] },
  minlength: [6, "Minimum password length is 6 characters"],
});
