const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pokeapi.co/api/v2/pokemon/",
    env: {
      requestMode: true
    }
  },
});
