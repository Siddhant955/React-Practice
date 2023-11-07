import React, { useState, createContext } from 'react';
import SearchBar from '../organisms/SearchBar.js';
import Events from '../templates/Events.js';

export const SearchContext = createContext();
export const TermContext = createContext();

const EventListingPage = () => {
  const [searcTerm, setSearcTerm] = useState('');

  return (
    <div>
      <SearchContext.Provider value={setSearcTerm}>
        <SearchBar />
      </SearchContext.Provider>
      <TermContext.Provider value={searcTerm}>
        <Events />
      </TermContext.Provider>
    </div>
  );
};

export default EventListingPage;
