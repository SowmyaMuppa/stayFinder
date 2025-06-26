import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import api from '../services/api';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get('term') || '';
    const locationParam = searchParams.get('location') || '';

    const fetchResults = async () => {
      try {
        const response = await api.get('/listings/search', {
          params: { term, location: locationParam }
        });
        setResults(response.data);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [location.search]);

  if (loading) return <div className="loading">Loading results...</div>;

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="property-list">
        {results.length > 0 ? (
          results.map(property => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p>No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;