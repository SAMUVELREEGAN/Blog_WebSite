import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use Render's PORT
    host: '0.0.0.0', // Allow external access
    strictPort: true,
    allowedHosts: ['.onrender.com', 'localhost'], // Allow Render's domain and localhost
  },
  build: {
    outDir: 'dist', // Ensure correct output directory
    emptyOutDir: true, // Clears old files before building
  },
  optimizeDeps: {
    include: ['react-bootstrap'], // Fix "use client" issue
  },
  ssr: {
    noExternal: ['react-bootstrap'], // Ensure proper SSR handling
  },
});
