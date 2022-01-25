import React from 'react';

export default function Animal(props) {
  return <div>
    {props.name}
    {props.type}
    {props.says}

  </div>;
}
