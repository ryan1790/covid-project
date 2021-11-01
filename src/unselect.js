import React from 'react';
import { useTheme } from './ThemeContext';

export default function Unselect({ handleUnselectAll }) {
	const lightTheme = useTheme();
	return (
		<div className={`unselect${lightTheme ? ' light' : ''}`} onClick={handleUnselectAll}>
			Unselect All
		</div>
	);
}
