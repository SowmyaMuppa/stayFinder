from pymongo import MongoClient

# Use your MongoDB Atlas URI if not running locally
client = MongoClient("mongodb+srv://stayadmin:<react123%40>@cluster0.3nv5vyn.mongodb.net/stayfinder?retryWrites=true&w=majority&appName=Cluster0")
db = client["stayfinder"]
collection = db["listings"]

sample_listings = [
    {
        "title": "Cozy Apartment in Hyderabad",
        "description": "A comfortable and modern apartment in the city center.",
        "location": "Hyderabad",
        "price": 2000,
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
        "title": "Beachside Villa in Goa",
        "description": "Enjoy the sea breeze in this luxurious villa.",
        "location": "Goa",
        "price": 5500,
        "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    },
    {
        "title": "Mountain Cabin in Manali",
        "description": "Peaceful cabin surrounded by snow-capped mountains.",
        "location": "Manali",
        "price": 3000,
        "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
    },
    {
        "title": "Luxury Penthouse in Mumbai",
        "description": "High-rise living with beautiful skyline views.",
        "location": "Mumbai",
        "price": 8500,
        "image": "https://images.unsplash.com/photo-1600585154337-596af9009a3d?auto=format&fit=crop&w=800&q=80"
    }
]

# Insert sample data
result = collection.insert_many(sample_listings)
print("Inserted IDs:", result.inserted_ids)
