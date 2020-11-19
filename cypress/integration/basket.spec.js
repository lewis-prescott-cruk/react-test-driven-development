/// <reference types="Cypress" />

/**
 * 1. Work out why the test is failing
 * 2. Fix failing test
 */

describe('Failing Test', () => {
    before(() => {
        cy.server()
        cy.route({
            method: 'POST',
            url:'/system/ajax'}).as('addToBasket')
        cy.visit('https://shop.cancerresearchuk.org/')
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.setCookie("OptanonAlertBoxClosed", "1")
    })

    beforeEach(() => {
        cy.visit('https://shop.cancerresearchuk.org/product/bake-sale-kits')
        cy.contains('Add to basket').click()
        cy.wait('@addToBasket')
    })

    it('should close notification', () => {
      cy.visit('https://shop.cancerresearchuk.org/cart')
      cy.contains('a', 'Remove').click()
      cy.get('.close').click()
      cy.contains('Stand Up To Cancer Bake Sale Kit').should('not.be.visible')
    })
})