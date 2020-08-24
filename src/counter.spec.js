import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Counter } from './counter.jsx'

describe('Counter', () => {
  before(() => {
    mount(<Counter />)
  })

  it('should display 0 as default', () => {
    cy.contains('Count: 0')
  })

  it('should increment count by 1', () => {
    cy.get('button').click()
    cy.get('[data-testid=count]').should('have.text', 'Count: 1')
  })

  // Extension
  it.skip('should reset count to zero', () => {
  })
})