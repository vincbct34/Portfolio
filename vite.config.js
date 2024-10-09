import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      external: ['react-i18next'],
    },
  },
})
