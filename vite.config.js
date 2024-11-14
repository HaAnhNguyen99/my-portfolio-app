import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png'],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Ensure you're using the correct port
  },
  rules: {
    'no-unused-vars': 'off',
  },
});
