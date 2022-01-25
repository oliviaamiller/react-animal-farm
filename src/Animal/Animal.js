import React from 'react';

export default function Animal(props) {
  return <div>
    <img src={ `./animals/${props.type}.svg` } />
    <p>{props.name}</p>
    <p>{props.type}</p>
    <p>{props.says}</p>

  </div>;
}
