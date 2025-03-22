import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [], // Remove react-grid-gallery from here
    },
  },
  base: '/',
});