import React from 'react';
import { useTheme } from './ThemeContext';

export default function Country({ handleCountryClick, country, selected }) {
	const lightTheme = useTheme();
	return (
		<li className={`country ${selected}${lightTheme ? ' light' : ''}`} id={country} onClick={handleCountryClick}>
			{country}
		</li>
	); /* changed */
}
