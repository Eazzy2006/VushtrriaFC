import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    react(),
    nodeResolve(), // Resolve external modules
  ],
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      external: ['react-grid-gallery'], // Externalize if needed
    },
  },
  base: '/', // Set this to your subdirectory if needed (e.g., '/subdir/')
});