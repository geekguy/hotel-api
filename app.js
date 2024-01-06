require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`Connected with MongoDB`);
});

const Hotel = require("./models/hotel");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/hotels", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

app.get("/api/hotels/:id", async (req, res) => {
  const id = req.params.id;
  const hotel = await Hotel.findById(id);
  res.send(hotel);
});

app.post("/api/hotels", async (req, res) => {
  const hotel = req.body;
  const dbHotel = await Hotel.create(hotel);
  res.send(dbHotel);
});

app.listen(8080, () => {
  console.log("Server is running on port #8080");
});
