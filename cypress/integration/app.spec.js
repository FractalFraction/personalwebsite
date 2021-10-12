// app.spec.js --- App feature tests
const sizes = {phone: 'iphone-6', tablet: 'ipad-2', desktop: [1024, 768], desktopReduced: [342, 768]}
const links = {home: "home", cv: "cv", contact: "contact"}

describe('Navigation', () => {

  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport(...sizes.desktop)
      cy.visit('/')
    })

      it('can go to CV page' , () => {
        cy.get('nav>div').children().each(($el) => expect($el).to.be.visible)

        cy.get(`a[href*=${links.cv}]`).click()
        cy.url().should('include',`/${links.cv}`)
        cy.get('p').contains('CV')
      })

      it('width of screen reduced, displays menu items in a column', () => {
        cy.viewport(...sizes.desktopReduced)
        cy.get('nav>div').children().each(($el) => expect($el).to.be.visible)
      })
    
  })

  context('Tablet', () => {
    beforeEach(() => {
      cy.viewport(sizes.tablet)
      cy.visit('/')
    })

      it('can go to CV page' , () => {
        cy.get('nav>div').children().each(($el) => expect($el).to.be.visible)
        cy.get(`a[href*=${links.cv}]`).click()
        cy.url().should('include',`/${links.cv}`)
        cy.get('p').contains('CV')
      })
    
  })

  context('Mobile', () => {

    beforeEach(() => {
      cy.viewport(sizes.phone)
      cy.visit('/')
    })
  
    it('displays hamburger menu', ()=> {
      // hamburger menu may be anchor link/button not an img?
      cy.get('nav>div').children().each(($el) => expect($el).to.be.visible)
  
      //links.forEach(link => cy.get(`a[href*=${link}]`).should('not.be.visible'))
  
      cy.get('a[href*="home"]').should('not.be.visible')
      cy.get('a[href*="cv"]').should('not.be.visible')
      cy.get('a[href*="contact"]').should('not.be.visible')
      cy.get('nav').children().should('contain', 'img[alt="hamburger"]')
      cy.get('img[alt="hamburger"]').click()
      cy.get('a[href*="home"]').should('be.visible')
      cy.get('a[href*="cv"]').should('be.visible')
      cy.get('a[href*="contact"]').should('be.visible')
    })
  
    it('functional links on hamburger menu' ,() => {
      cy.get('img[alt="hamburger"]').click()
      cy.get('a[href*="cv"').click()
      cy.url().should('include','/cv')
      cy.get('p').contains('CV')
      cy.get('img[alt="hamburger"]').click()
      cy.get('a[href*="cv"').click()
      cy.url().should('include','/cv')
      cy.get('p').contains('CV')
    })

  })

})

