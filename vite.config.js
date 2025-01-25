import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test APIs (e.g., describe, it, expect)
    environment: 'jsdom', // Use JSDOM for testing DOM-related code
    coverage: {
      provider: 'c8', // Provides test coverage
      reporter: ['text', 'json', 'html'], // Output formats for coverage
    },
  },
})
