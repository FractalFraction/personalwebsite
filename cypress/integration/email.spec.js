const links = {home: "home", cv: "cv", contact: "contact"}

describe.only('sends email successfully', () => {
  cy.visit('/contact')
  cy.get('form[data-test-id="email-form"]')
  cy.get('form[data-test-id="email-form"]').children()
  cy.get('input[data-test-id="forename"]').type('Test')
  cy.get('input[data-test-id="surname"]').type('Dummy')
  cy.get('input[data-test-id="subject"]').type('Testing Email')
  cy.get('input[data-test-id="address"]').type('dummy@testmail.com')
  cy.get('input[data-test-id="message"]').type('I love tests!')
  cy.get('button[data-test-id="send"]').click()
})