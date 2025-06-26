import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching listings:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">All Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No listings found.</p>
        ) : (
          listings.map((listing) => (
            <Link key={listing._id} to={`/listing/${listing._id}`}>
              <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{listing.title}</h2>
                  <p className="text-gray-600">{listing.location}</p>
                  <p className="text-green-600 font-bold mt-2">
                    ₹{listing.price}/night
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Listings;
