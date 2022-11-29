/// <reference types = "Cypress" />

describe("Test GET API pokeapi", () => {
  const pokemonIds = [
    {
      id: 25,
      name: "pikachu",
    },
    {
      id: 100,
      name: "voltorb",
    },
  ];

  pokemonIds.forEach((pokemonId) => {
    const { id, name } = pokemonId;

    it(`Test Headers Validation with pokemon: ${name}`, () => {
      cy.request(`${id}`).as(`${id}`);
      cy.get(`@${id}`)
        .its("headers")
        .its("content-type")
        .should("include", "application/json; charset=utf-8");
    });

    it(`Test status code with pokemon name: ${name}`, () => {
      cy.request(`${id}`).as(`${id}`);
      cy.get(`@${id}`).its("status").should("equal", 200);
    });

    it(`Test pokemon name with pokemon name: ${name}`, () => {
      cy.request({
        method: "GET",
        url: `${id}`,
      }).as("pokemon25");
      cy.get("@pokemon25")
        .its("body")
        .should("include", { name: `${name}` });
    });
  });

  it("Test bad request", () => {
    cy.request({
      method: "GET",
      url: "1000",
      failOnStatusCode: false,
    }).as("pokemon1000");
    cy.get("@pokemon1000").its("status").should("equal", 404);
  });
});
