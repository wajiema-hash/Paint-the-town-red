import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    // Vercel preview hostnames are generated and can change between sessions.
    allowedHosts: ['.vercel.run'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
  },
});
