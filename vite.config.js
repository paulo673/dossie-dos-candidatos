import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // os dados dos dois dossiês (~250 kB) vão no bundle principal de propósito: o site é estático
    chunkSizeWarningLimit: 900,
  },
})
