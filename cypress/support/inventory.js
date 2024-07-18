const ITEM_BOX = '.items'
const ITEM_BADGE = '#item_badge'

//Pending jquery to select the number of items
cypress.commands.add("addItemsToCart", (itemsToAdd, name)=> {
    cy.get(ITEM_BOX).contains(name).click();
    cy.get(ITEM_BADGE).should('be.visible').and("have.length", itemsToAdd)
})