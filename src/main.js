import React from 'react';
import Chart from './chart';
import ToggleMenu from './toggleMenu';
import { useTheme } from './ThemeContext';
import ThemeButton from './themeButton';

export default function Main({ countryData, menuOpen, handleMenuToggle }) {
	const lightTheme = useTheme();
	return (
		<div>
			<ToggleMenu menuOpen={menuOpen} handleMenuToggle={handleMenuToggle} />
			<main className={`chart-area${menuOpen ? '' : ' full-screen'}${lightTheme ? ' light' : ''}`}>
				<h1>Covid-19 Statistics by Country</h1>
				<ThemeButton />
				<div className={`chart${lightTheme ? ' light' : ''}`}>
					<h2 className='chart-title'>Daily Deaths</h2>
					<Chart countryData={countryData} path1='deaths' path2='new' persist={false} />
				</div>

				<div className={`chart${lightTheme ? ' light' : ''}`}>
					<h2 className='chart-title'>Total Deaths</h2>
					<Chart countryData={countryData} path1='deaths' path2='total' persist={true} />
				</div>

				<div className={`chart${lightTheme ? ' light' : ''}`}>
					<h2 className='chart-title'>Daily Cases</h2>
					<Chart countryData={countryData} path1='cases' path2='new' persist={false} />
				</div>

				<div className={`chart ${lightTheme ? 'light' : ''}`}>
					<h2 className='chart-title'>Deaths per 1 Million</h2>
					<Chart countryData={countryData} path1='deaths' path2='1M_pop' persist={true} />
				</div>

				<div className={`chart ${lightTheme ? 'light' : ''}`}>
					<h2 className='chart-title'>Cases per 1 Million</h2>
					<Chart countryData={countryData} path1='cases' path2='1M_pop' persist={true} />
				</div>
			</main>
		</div>
	);
}
