const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  role: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
