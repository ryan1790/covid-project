import React, { useState, useEffect } from 'react';
import './styles.css';
import Sidebar from './sidebar';
import Main from './main';
import getData from './getData';

const ERROR_DATA = [
  'Cura&ccedil;ao',
  'Diamond-Princess-',
  'Guam',
  'MS-Zaandam-',
  'Puerto-Rico',
  'R&eacute;union',
  'US-Virgin-Islands',
];

function App() {

  const [countries, setCountries] = useState(false);
  const [countriesSelected, setCountriesSelected] = useState(null);
  const [lastSelectedCountry, setLastSelectedCountry] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [countryData, setCountryData] = useState({});
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect( ()=>{
    getData('countries')
      .then((data)=>{
        let list = data.data.response;
        console.log(list);
        const filteredList = list.filter(country => !ERROR_DATA.includes(country));
        setCountries(filteredList);
        setCountriesSelected(()=>{
          let selected = {};
          for (let country of list) {
            selected[country] = false; /* changed */
          }
          return selected;
        });
      })
      .catch((err)=> console.log(err));
  }, []);

  function filterData(data) {
    let previousDate = '';
    let newData = [];
    for (let dataPoint of data) {
      if (dataPoint.day !== previousDate) {
        previousDate = dataPoint.day;
        newData.unshift(dataPoint);
      }
    }
    return newData;
  }

  useEffect(()=>{
    if (typeof lastSelectedCountry==='string') {
      if (countriesSelected[lastSelectedCountry]) {
        getData('history', lastSelectedCountry)
        .then((data)=>{
          const filteredData = filterData(data.data.response);
          setCountryData((prevData)=>{
            const newData = {...prevData};
            newData[lastSelectedCountry] = filteredData;
            return newData;
          });
        })
        .catch((err)=>console.log(err));
      } else {
        setCountryData((prevData)=>{
          const newData = {...prevData};
          delete newData[lastSelectedCountry];
          return newData;
        })
      }
      setLastSelectedCountry(null);
    }}, [lastSelectedCountry]);

  if (!countries || !countriesSelected) return 'Loading...';

  function handleSearch(event){
    setSearchFilter(event.target.value);
  }

  function handleCountryClick(event){
    const country = event.target.id;
    setCountriesSelected((prevCountries)=>{
      const newCountries = {...prevCountries};
      newCountries[country] = !prevCountries[country];
      return newCountries;
    });
    setLastSelectedCountry(country);
  }

  function handleUnselectAll() {
    setCountriesSelected((prevSelected)=>{
      const newSelected = {};
      for (let country in prevSelected) {
        newSelected[country] = false;
      }
      return newSelected;
    });
    setCountryData({});
  }

  function handleMenuToggle() {
    setMenuOpen(prev => !prev);
  }

  return (
    <>
    <Sidebar countryList={countries} 
             searchFilter={searchFilter} 
             handleSearch={handleSearch}
             handleCountryClick={handleCountryClick}
             countriesSelected={countriesSelected}
             handleUnselectAll={handleUnselectAll}
             menuOpen={menuOpen}
              />
    {Object.keys(countryData).length? <Main countryData={countryData}
                                        handleMenuToggle={handleMenuToggle}
                                        menuOpen={menuOpen} /> 
    : <main className='chart-area fill'><h1>Select Countries to See Data</h1></main>}
    </>
  );
}

export default App;