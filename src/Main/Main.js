import React from 'react';
import './Main.css';
import backgroundImg from '../images/background.png';
import { animals } from './data.js';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />

    </main>
  );
}
