/*
 * Default: Value starts from 0
 * Feature 1: Increment count by 1 on each click
 * Feature 2: Reset count to zero
 **/

import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <span data-testid="count">Count: {count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
};
