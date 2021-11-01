import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

export default function ThemeButton() {
	const lightTheme = useTheme();
	const lightThemeUpdate = useThemeUpdate();
	return (
		<div>
			<button onClick={lightThemeUpdate} className={`theme-button${lightTheme ? '' : ' light'}`}>
				{`${lightTheme ? 'Dark Theme' : 'Light Theme'}`}
			</button>
		</div>
	);
}
