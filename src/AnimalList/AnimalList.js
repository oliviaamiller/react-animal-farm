import React from 'react';
import './AnimalList.css';
import Animal from '../Animal/Animal.js';

export default function AnimalList({ animals }) {
  return <div className='animalList'>
    {animals.map((animal, i) =>
      <Animal key={i} {...animal} />)} 
  </div>;
}
