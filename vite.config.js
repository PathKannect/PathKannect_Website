import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Add your ngrok hostname here
    allowedHosts: ['uncast-johnette-comely.ngrok-free.dev'],
    port: 5173,      // or whatever port you are using
    strictPort: true,
  },
});
