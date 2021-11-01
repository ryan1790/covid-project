import React from 'react';
import Unselect from './unselect';
import SearchBar from './searchBar';
import CountryList from './countryList';
import { useTheme } from './ThemeContext';

export default function Sidebar(props) {
  const lightTheme = useTheme();
    return (
      <>
        <menu className={`sidebar ${props.menuOpen? 'open' : 'closed'}${lightTheme? ' light':''}`}>
          <div className={`sidebar-header${lightTheme? ' light':''}`}>
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