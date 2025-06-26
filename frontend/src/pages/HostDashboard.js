import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HostDashboard() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      await fetch(`http://localhost:5000/api/listings/${id}`, {
        method: "DELETE",
      });
      setListings(listings.filter(listing => listing._id !== id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Listings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing._id} className="border rounded-lg shadow-md overflow-hidden">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{listing.title}</h2>
              <p className="text-gray-600">{listing.location}</p>
              <p className="text-green-600 font-bold">₹{listing.price}/night</p>

              <div className="mt-3 flex gap-3">
                <Link
                  to={`/edit/${listing._id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(listing._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HostDashboard;
