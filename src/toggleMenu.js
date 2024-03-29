import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext';

export default function ToggleMenu({ menuOpen, handleMenuToggle }) {
	const lightTheme = useTheme();
	const element = (
		<FontAwesomeIcon
			icon={menuOpen ? faMinusCircle : faPlusCircle}
			onClick={handleMenuToggle}
			className={`toggle-button ${menuOpen ? 'btn-open' : 'btn-closed'}${lightTheme ? ' light' : ''}`}
		/>
	);
	return element;
}
