import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    react(), // Enables React support
    nodeResolve(), // Resolves external modules
  ],
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      external: ['react-grid-gallery'], // Externalize if needed
    },
  },
  base: '/', // Base URL for your app (use '/subdir/' if deploying to a subdirectory)
  server: {
    port: 3000, // Port for the development server
    open: true, // Automatically open the app in the browser
  },
  publicDir: 'public', // Directory for static assets
});