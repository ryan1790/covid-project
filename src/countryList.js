import React from 'react';
import Country from './country';

export default function CountryList({countryList, searchFilter, handleCountryClick, countriesSelected}) {
    const filteredList = countryList.filter(country=>(
      country.toLowerCase().includes(searchFilter.toLowerCase())
      )).map((country, index)=> (<Country country={country} 
                                 key={country} index={index}
                                 handleCountryClick={handleCountryClick}
                                 selected={countriesSelected[country]} />)); /* kept */
    return (
      <ul>{filteredList}</ul>
    );
  }