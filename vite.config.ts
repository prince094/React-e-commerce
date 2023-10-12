import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      src: '/src',
    },
    // alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});