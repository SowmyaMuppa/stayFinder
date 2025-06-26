

import axios from 'axios';

// Create the base axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
});

// Add JWT token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add the searchListings function
const searchListings = async (params) => {
  return api.get('/listings/search', { params });
};

// Export all methods
export default {
  ...api, // Spread all existing axios methods
  searchListings // Add the new search function
};
