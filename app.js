require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const hotelRoutes = require("./routes/hotel");
const userRouters = require("./routes/user");

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log(`Connected with MongoDB`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/hotels", hotelRoutes);
app.use("/api/users", userRouters);

app.listen(8080, () => {
  console.log("Server is running on port #8080");
});
