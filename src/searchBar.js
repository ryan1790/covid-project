import React from 'react';

export default function SearchBar({handleSearch, searchFilter}) {
    return (
      <input type='text' placeholder='Search' value={searchFilter} onChange={handleSearch} />
    )
  }