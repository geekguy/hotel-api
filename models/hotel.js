const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  price: Number,
  rooms: Number,
  image: String,
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
