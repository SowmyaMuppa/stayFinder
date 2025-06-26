// Load environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const listingsRoutes = require("./routes/listings");
app.use("/api/listings", listingsRoutes);
const bookingsRoutes = require("./routes/bookings");
app.use("/api/bookings", bookingsRoutes);
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);



// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

