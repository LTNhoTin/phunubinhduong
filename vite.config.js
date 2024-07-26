import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/phunubinhduong/', // Thay đổi base thành tên kho lưu trữ của bạn
  build: {
    outDir: 'dist'
  }
});
