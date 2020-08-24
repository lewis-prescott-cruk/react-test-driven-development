import React from "react";
import { mount } from "cypress-react-unit-test";
import { Counter } from "./counter.jsx";

describe("Counter", () => {
  before(() => {
    mount(<Counter />);
  });

  it("should display 0 as default", () => {
    cy.contains("Count: 0");
  });

  it("should increment count by 1", () => {
    cy.contains("Increment").click();
    cy.contains("Count: 1");
    // https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Step-4-Make-an-assertion
  });

  // Extension
  it("should reset count to zero", () => {
    cy.contains("Reset").click();
    cy.contains("Count: 0");
  });
});
