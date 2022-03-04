it ('search navitation to teachers page' , () => {

    cy.visit('http://localhost:3000')
    cy.get('.btn').should('be.disabled')
    cy.get('#skill').select('Music')
    cy.get('.btn').click()
    cy.url().should('eq', 'http://localhost:3000/teachersNotFound')
    cy.visit('http://localhost:3000')
    cy.get('.btn').should('be.disabled')
    cy.get('#city').select('Ocala')
    cy.get('.btn').click()
    cy.url().should('eq', 'http://localhost:3000/teachersNotFound')
})