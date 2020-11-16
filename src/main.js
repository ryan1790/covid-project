import React from 'react';
import Chart from './chart';
import ToggleMenu from './toggleMenu';

export default function Main({countryData, menuOpen, handleMenuToggle}) {

    return (
      <>
        <ToggleMenu menuOpen={menuOpen}
                    handleMenuToggle={handleMenuToggle} />
        <main className={`chart-area ${menuOpen? '': 'full-screen'}`}>
        <h1>Covid-19 Statistics by Country</h1>
        <div className='chart'>
          <h2 className='chart-title'>Daily Deaths</h2>
          <Chart countryData={countryData} path1='deaths' path2='new' persist={false}/>
        </div>

        <div className='chart'>
          <h2 className='chart-title'>Total Deaths</h2>
          <Chart countryData={countryData} path1='deaths' path2='total' persist={true} />
        </div> 

        <div className='chart'>
          <h2 className='chart-title'>Daily Cases</h2>
          <Chart countryData={countryData} path1='cases' path2='new' persist={false}/>
        </div>

        <div className='chart'>
          <h2 className='chart-title'>Deaths per 1 Million</h2>
          <Chart countryData={countryData} path1='deaths' path2='1M_pop' persist={true}/>
        </div>

        <div className='chart'>
          <h2 className='chart-title'>Cases per 1 Million</h2>
          <Chart countryData={countryData} path1='cases' path2='1M_pop' persist={true}/>
        </div>
               
        </main>
      </>
    )
  }