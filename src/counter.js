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
