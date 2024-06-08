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
      name: 'todoApp',
      remotes: {
        todoStatus: 'http://localhost:5001/assets/remoteEntry.js',
        todoCreation: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
