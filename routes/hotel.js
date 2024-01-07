const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel");

router.get("/", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const hotel = await Hotel.findById(id);
  res.send(hotel);
});

router.post("/", async (req, res) => {
  const hotel = req.body;
  const dbHotel = await Hotel.create(hotel);
  res.send(dbHotel);
});

module.exports = router;
