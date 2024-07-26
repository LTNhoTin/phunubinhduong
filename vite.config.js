import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/phunubinhduong/', // Thay đổi base URL thành tên repository của bạn
});
