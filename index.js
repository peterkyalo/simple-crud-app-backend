// import 'dotenv/config'
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_DB;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Express js API ");
});

//Mongo DB Connection
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully! 😂");
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection to MongoDB failed");
  });
