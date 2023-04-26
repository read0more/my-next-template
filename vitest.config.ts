import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      src: '/src', // Yarn link protocol이 제대로 안먹히는 모양이라(src에 package.json 넣으면 되긴 함), alias로 대체
    },
  },
});
