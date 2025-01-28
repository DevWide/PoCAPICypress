const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}', 
    requestTimeout: 15000,
    responseTimeout: 15000,
  },
});

