import React from 'react';
import Unselect from './unselect';
import SearchBar from './searchBar';
import CountryList from './countryList';

export default function Sidebar(props) {
    return (
      <>
        <menu className={`sidebar ${props.menuOpen? 'open' : 'closed'}`}>
          <div className='sidebar-header'>
            <div className='sidebar-label'>Countries</div>
            <Unselect handleUnselectAll={props.handleUnselectAll}/>
            <SearchBar handleSearch={props.handleSearch} searchFilter={props.searchFilter}/>
          </div>
          <CountryList countryList={props.countryList} 
                       searchFilter={props.searchFilter}
                       handleCountryClick={props.handleCountryClick}
                       countriesSelected={props.countriesSelected} />
        </menu>
      </>
    )
  }