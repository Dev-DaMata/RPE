const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://provaqa.prc.rpe.tech:9080/desafioqa/',
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
  },
});
