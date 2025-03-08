import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 5173, // Use Render's PORT
    host: '0.0.0.0', // Allow external access
    strictPort: true,
    allowedHosts: ['.onrender.com', 'localhost'] // Allow Render's domain and localhost
  }
});
