import React from 'react';
import { useTheme } from './ThemeContext';
import ThemeButton from './themeButton';

export default function() {
	const lightTheme = useTheme();
	return (
		<main className={`chart-area fill${lightTheme ? ' light' : ''}`}>
			<h1>Select countries to see data</h1>
			<ThemeButton />
		</main>
	);
}
