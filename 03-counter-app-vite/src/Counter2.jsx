import React, { useState } from "react";

export const Counter2 = () => {
  const [ count, setCount ] = useState(0);

  const sum = () => setCount( count + 1 );

  return (
    <>
      <h1>{ count }</h1>
      <button onClick={ sum }> sumar </button>
    </>
  );
};
