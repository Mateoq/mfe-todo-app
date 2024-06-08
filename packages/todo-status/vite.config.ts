import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
  plugins: [
    react(),
    federation({
      name: 'todoStatus',
      filename: 'remoteEntry.js',
      exposes: {
        './TodoStatus': './src/components/TodoStatus.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
