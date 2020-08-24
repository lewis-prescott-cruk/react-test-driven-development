/*
 * Default: Value starts from 0
 * Feature 1: Increment count by 1 on each click
 * Feature 2: Reset count to zero
**/

import React, { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span data-testid="count">Count: {counter}</span>
      <button type="button" onClick={() => setCounter(counter+1)}>
        Increment
      </button>
    </>
  );
};
