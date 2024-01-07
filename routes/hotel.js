const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Hotel = require("../models/hotel");

const jwtVerify = (req, res, next) => {
  const token = req.headers?.authorization;
  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } else {
    next();
  }
};

router.use(jwtVerify);

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
  if (req.user && req.user.role === "ADMIN") {
    const hotel = req.body;
    const dbHotel = await Hotel.create(hotel);
    res.send(dbHotel);
  } else {
    res.status(403).send({ message: "Unauthorized" });
  }
});

module.exports = router;
