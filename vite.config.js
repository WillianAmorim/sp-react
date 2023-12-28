import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImages from 'vite-plugin-vue-images'
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //     },
  //   },
  // },
  plugins: [
    react(),
    ViteImages(),
  ],
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
  //   ],
  // },
})
