import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  css: {
    transformer: 'postcss', // default: 'lightningcss' but Vite 8 & Tailwind 4 is currently not compatible
  },
  build: {
    cssMinify: 'esbuild', // default: 'lightningcss'
  },
  plugins: [react(), tailwindcss()],
})
