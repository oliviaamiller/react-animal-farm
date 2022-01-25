import React from 'react';
import './AnimalList.css';
import Animal from '../Animal/Animal.js';

export default function AnimalList(props) {
  return <div>
    {
      props.animals.map((animal, i) =>
        <Animal key={`${animal.name}-${i}`} animal={animal} />)
    } 
  </div>;
}
