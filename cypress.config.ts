import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: './cypress/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: './cypress/support/e2e.ts'
  }
})
