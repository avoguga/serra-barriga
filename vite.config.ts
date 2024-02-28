import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
      include: '**/*.svg?react',
    }),
  ],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      external: ['@teachablemachine/image', 'react-icons/fa'],
    },
  },
});
