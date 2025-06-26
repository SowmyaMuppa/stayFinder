// models/Listing.js
const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  price: Number,
  image: String,
  latitude: Number,
  longitude: Number,

  host: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true
}

});

module.exports = mongoose.model("Listing", listingSchema);
