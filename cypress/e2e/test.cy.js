import { forEach } from "cypress/types/lodash"

describe("Test", ()=> {

    forEach((scenarios)=> {
        scenarios.producto

        it("Test", ()=>{

            const NAME_PRODUCT = scenarios.producto
         
            cy.login("standard_user", "secret_sauce")
            cy.addItemsToCart(1, NAME_PRODUCT)
            cy.goToShoppingCart()
            cy.validateElementInCart(NAME_PRODUCT)
         
         })
    })
})