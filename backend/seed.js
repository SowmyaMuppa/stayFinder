// seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/Listing"); // Adjust path if needed

const listings = [
  {
    title: "Cozy Apartment in Hyderabad",
    location: "Hyderabad",
    price: 2000,
    description: "A comfortable and modern apartment in the city center.",
    image: "https://source.unsplash.com/400x300/?apartment,hyderabad"
  },
  {
    title: "Beachside Villa in Goa",
    location: "Goa",
    price: 5500,
    description: "Enjoy the sea breeze in this luxurious villa.",
    image: "https://source.unsplash.com/400x300/?villa,goa"
  },
  {
    title: "Mountain Cabin in Manali",
    location: "Manali",
    price: 3000,
    description: "Peaceful cabin surrounded by snow-capped mountains.",
    image: "https://source.unsplash.com/400x300/?cabin,manali"
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    await Listing.deleteMany(); // Clear existing listings
    await Listing.insertMany(listings);

    console.log("✅ Listings seeded successfully");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
