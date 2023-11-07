import React, { useContext } from 'react';
import { SearchContext } from '../pages/EventListingPage.js';

const SearchInput = () => {
  const setSearch = useContext(SearchContext);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="feildset-search">
      <input
        id="searchbar"
        onChange={handleChange}
        className="search-input"
        type="text"
        placeholder="Search By Event Title ..."
      />
    </div>
  );
};

export default SearchInput;
