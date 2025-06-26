// Add this import at the top
import SearchResults from './pages/SearchResults';
import SearchBar from './components/SearchBar';

// Add this route inside your <Routes> component
<Route path="/search" element={<SearchResults />} />

// Add SearchBar to your layout (example: below Header)
<Header />
<SearchBar />