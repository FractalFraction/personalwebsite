// app.spec.js --- App feature tests
const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

describe('Navigation', () => {
  sizes.forEach((size) => {
    it('can go to CV page' , () => {
      Cypress._.isArray(size) ? cy.viewport(size[0],size[1]) : cy.viewport(size)
      cy.visit('/')
      cy.get('a[href*="cv"]').click()
      cy.url().should('include','/cv')
      cy.get('p').contains('CV')
    })
  })
})