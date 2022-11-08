import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: '/monynaldoni.com/',
    build: {
      outDir: 'build',
    },
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
    },
  });
};
