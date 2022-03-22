it ('search navitation to teachers page' , () => {

    cy.visit('http://localhost:3000')
    cy.get('.btn').should('be.disabled')
    cy.get('#skill').select('Yoga')
    cy.get('#city').select('Miami')
    cy.get('.btn').click()
    cy.location('pathname').should('eq', '/teachers')
    cy.get('h5') // 9.
    .should('contain', 'Fees')
    cy.get('h5') // 9.
    .should('contain', 'Location')

    cy.get('.d-inline-block').click()
    cy.url().should('include', 'http://localhost:3000')
    //cy.getByRole('link', {  name: /more info/i}).click()
    //cy.location('pathname').should('eq', '/teachers/i')
    // cy.get('link').click({multiple:true},{force:true})
    // cy.location('pathname').should('eq', '/teachers/6')
    })
    