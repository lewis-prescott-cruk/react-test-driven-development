/// <reference types="Cypress" />

/**
 * 1. Add item to basket
 * 2. Complete skipped test
 * 3. Move setup code to before / beforeEach
 */

describe('My First Test', () => {
    it('should add item to basket', () => {
      cy.visit('https://shop.cancerresearchuk.org/fundraising-events')
      expect(true).to.equal(true)
    })

    it.skip('should remove item from basket', () => {
    })
})