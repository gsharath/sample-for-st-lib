import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        components: path.resolve(__dirname, './src/components/index.js')
      },
      name: 'sample-for-st-lib',
    },
    rollupOptions: {
      external: ['react','react-dom'],
    },
    emptyOutDir: true,
  },
  plugins: [react()],
});

