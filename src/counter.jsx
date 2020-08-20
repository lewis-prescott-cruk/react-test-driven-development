/*
 * Default: Value starts from 0
 * Feature 1: Increment count by 1 on each click
 * Feature 2: Reset count to zero
**/

import React, { useState } from "react";
export const Counter = () => {
  return (
    <>
      <span data-testid="count">Count: </span>
      <button type="button" onClick={() => 0}>
        Increment
      </button>
    </>
  );
};
