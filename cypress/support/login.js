const USERNAMEFIELD = "#username" 
const PASSWORD = "#username" 
const WELCOME_BANNER = "#banner"
const INVENTORY_PAGE_BANNER = "#inv_page_banner"

cypress.commands.add("login", (username, password)=> {
    cy.visit("https://www.saucedemo.com/")
    cy.get(USERNAMEFIELD).type(username)
    cy.get(PASSWORD).type(password)
    cy.get(WELCOME_BANNER).should('be.visible')
    cy.get(INVENTORY_PAGE_BANNER).should('be.visible')
})

