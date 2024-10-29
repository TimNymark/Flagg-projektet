import "./Search.css"

const Search = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Updates searchTerm in HomePage
  };

  return (
    <input className="search-input"
      type="text"
      placeholder="Search for a country"
      onChange={handleSearch}
    />
  );
};

export default Search;
