import { defineConfig } from 'astro/config';

// Configuración para GitHub Pages
export default defineConfig({
  site: 'https://xzero11x.github.io',
  base: '/hermes-academy',
  output: 'static',
  build: {
    format: 'file'
  }
});
