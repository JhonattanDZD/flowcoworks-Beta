import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://jhonattandzd.github.io/flowcoworks.github.io/',
  plugins: [react()]
})
