import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data))
      .catch((err) => console.error("Error fetching listing:", err));
  }, [id]);

  const handleBooking = async () => {
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // If user is logged in, add auth token header here
      },
      body: JSON.stringify({
        listingId: id,
        userId: "demoUser123", // Replace with actual user ID
        startDate,
        endDate,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      setMessage("Booking successful!");
    } else {
      setMessage(result.message || "Booking failed.");
    }
  };

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
      <p className="text-gray-600 mb-1">{listing.description}</p>
      <p className="text-green-600 font-semibold mb-1">
        ₹{listing.price} / night
      </p>
      <p className="text-blue-600 mb-4">📍 {listing.location}</p>

      <div className="border rounded p-4 shadow-sm mb-4">
        <h2 className="text-xl font-semibold mb-2">Book This Listing:</h2>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleBooking}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Book Now
        </button>
        {message && <p className="mt-2 text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default ListingDetails;
