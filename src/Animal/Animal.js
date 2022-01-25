import React from 'react';
import './Animal.css';

export default function Animal({ name, type, says }) {
  return <div className='animal'>
    <img src={ `./animals/${type}.svg` } />
    <p>{name}</p>
    <p>{says}</p>

  </div>;
}
