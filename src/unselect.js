import React from 'react';

export default function Unselect({ handleUnselectAll }) {
  return (
    <div className='unselect' onClick={handleUnselectAll}>Unselect All</div>
  )
}