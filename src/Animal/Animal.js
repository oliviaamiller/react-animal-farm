import React from 'react';
import './Animal.css';

export default function Animal({ name, type, says, left, top }) {
  return <div className='animal' style={{ left: left, top: top }}>
    <img alt={`${name}`} src={ `./animals/${type}.svg` } />
    <p className='animalName'>{name}</p>
    <p>{says}</p>

  </div>;
}
