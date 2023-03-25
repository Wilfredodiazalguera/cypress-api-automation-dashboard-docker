/// <reference types = "Cypress" />
import pokemonData from '../fixtures/pokemonData.json'

describe("GET API pokeapi", () => {

  pokemonData.forEach((pokemonId) => {
    const { id, name } = pokemonId;

    it(`GET - Headers Validation with pokemon: ${name}`, () => {
      cy.request(`${id}`).as(`${id}`);
      cy.get(`@${id}`)
        .its("headers")
        .its("content-type")
        .should("include", "application/json; charset=utf-8");
    });

    it(`GET - Status code with pokemon : ${name}`, () => {
      cy.request(`${id}`).as(`${id}`);
      cy.get(`@${id}`).its("status").should("equal", 200);
    });

    it(`GET - Pokemon name with pokemon : ${name}`, () => {
      cy.request({
        method: "GET",
        url: `${id}`,
      }).as("pokemon25");
      cy.get("@pokemon25")
        .its("body")
        .should("include", { name: `${name}` });
    });
  });

  it("GET - Bad request", () => {
    cy.request({
      method: "GET",
      url: "89568465185",
      failOnStatusCode: false,
    }).as("pokemon1000");
    cy.get("@pokemon1000").its("status").should("equal", 404);
  });

});
