import React from 'react'

export default function Country({handleCountryClick, country, selected}) {
    return (
      <li className={`country ${selected}`} id={country} onClick={handleCountryClick}>{country}</li>
    ) /* changed */
  }