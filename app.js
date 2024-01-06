const express = require("express");

const app = express();

const hotels = [
  {
    id: 1,
    name: "Hotel 10",
    city: "City 1",
    price: 100,
    rooms: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Hotel 2",
    city: "City 2",
    price: 200,
    rooms: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Hotel 3",
    city: "City 3",
    price: 300,
    rooms: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Hotel 4",
    city: "City 4",
    price: 400,
    rooms: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Hotel 5",
    city: "City 5",
    price: 500,
    rooms: 5,
    image: "https://via.placeholder.com/150",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/hotels", (req, res) => {
  res.json(hotels);
});

app.get("/api/hotels/:id", (req, res) => {
  const id = req.params.id;
  const hotel = hotels.find((hotel) => hotel.id === Number(id));
  if (!hotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }
  res.json(hotel);
});

app.post("/api/hotels", (req, res) => {
  const hotel = req.body;
  hotel.id = hotels.length + 1;
  hotels.push(hotel);
  res.send(hotel);
});

app.listen(8080, () => {
  console.log("Server is running on port #8080");
});
