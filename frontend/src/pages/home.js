import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [listings, setListings] = useState([]);
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchListings = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (location) queryParams.append("location", location);
      if (minPrice) queryParams.append("minPrice", minPrice);
      if (maxPrice) queryParams.append("maxPrice", maxPrice);

      const response = await fetch(`http://localhost:5000/api/listings?${queryParams.toString()}`);
      const data = await response.json();
      setListings(data);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  useEffect(() => {
    fetchListings(); // Initial load
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchListings(); // On search
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Available Listings</h1>

      <form onSubmit={handleSearch} className="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Location"
          className="border rounded px-3 py-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          className="border rounded px-3 py-2"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border rounded px-3 py-2"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No listings found.</p>
        ) : (
          listings.map((listing) => (
            <Link to={`/listing/${listing._id}`} key={listing._id}>
              <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{listing.title}</h2>
                  <p className="text-gray-600">{listing.location}</p>
                  <p className="text-green-600 font-bold mt-2">₹{listing.price}/night</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;

