const SHOPPING_CART_BUTTON = "#shopping_cart_button"
const SHOPPING_ICON = "#shoppingCartIcon"
const CART_ELEMENTS = ".elements"


cypress.commands.add("goToShoppingCart", ()=> {
    cy.get(SHOPPING_CART_BUTTON).click()
    cy.get(SHOPPING_ICON).should('be.visible')
})

cypress.commands.add("validateElementInCart", (NAME)=> {
    cy.get(CART_ELEMENTS).should('contain', NAME)
})