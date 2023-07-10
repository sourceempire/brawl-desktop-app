import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [
    mkcert(),
    react({
      babel: {
        plugins: ['babel-plugin-styled-components']
      }
    }),
    svgr()
  ],
  resolve: {
    alias: {
      api: '/src/api',
      assets: '/src/assets',
      common: '/src/common',
      context: '/src/context',
      'electron-window': '/src/electron-window',
      frames: '/src/frames',
      hooks: '/src/hooks',
      pages: '/src/pages',
      types: '/src/types',
      utils: '/src/utils'
    }
  }
});
