import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home"; // ✅ matches the actual file

import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddListing from "./pages/AddListing"; // ✅ Import AddListing
import ListingDetails from "./pages/ListingDetails";
import HostDashboard from "./pages/HostDashboard";








function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow p-4">
          <h1 className="text-3xl font-bold text-blue-600">StayFinder</h1>
          <nav className="flex flex-wrap gap-4 mt-4 mb-2">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <Link to="/listings" className="text-blue-600 hover:underline">Listings</Link>
            <Link to="/add" className="text-blue-600 hover:underline">Add Listing</Link> {/* ✅ Link */}
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
            <Link to="/host" className="text-blue-600 hover:underline">Host Dashboard</Link>

          </nav>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/add" element={<AddListing />} /> {/* ✅ Route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/host" element={<HostDashboard />} />
            

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
