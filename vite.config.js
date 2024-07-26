import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/phunubinhduong/', // Cập nhật base URL cho GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    host: true
  }
});
