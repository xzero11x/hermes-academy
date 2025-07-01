import { defineConfig } from 'astro/config';

// Configuración simple para simulación
export default defineConfig({
  output: 'static',
  build: {
    format: 'file'
  }
});
