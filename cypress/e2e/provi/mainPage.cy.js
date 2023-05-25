/// <reference types="Cypress" />

describe('Main page tests', function() {

    it('My FirstTest case',function() {
        cy.visit("https://www.provident.pl/")

        cy.get('#onetrust-accept-btn-handler').should('be.visible').and('have.text','Accept All Cookies')
        cy.get('#onetrust-policy-text').should('be.visible').and('contain.text','By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.')
        cy.get('#onetrust-pc-btn-handler').should('be.visible').and('have.text','Cookies Settings')
 


    })
})