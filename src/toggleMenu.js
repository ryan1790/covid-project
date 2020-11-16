import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default function ToggleMenu({menuOpen, handleMenuToggle}) {
    const element = <FontAwesomeIcon icon={menuOpen? faMinusCircle: faPlusCircle}
                    onClick={handleMenuToggle}
                    className={`toggle-button ${menuOpen ? 'btn-open' : 'btn-closed'}`} />;
    return element;
}