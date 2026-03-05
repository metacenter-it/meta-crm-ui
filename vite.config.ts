import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:'/',
  server: {
    host: '0.0.0.0',
    port: 8086,
    allowedHosts: ['148.244.77.172'],
    watch: {
      usePolling: true   // necesario en servidores Linux
    }
  }
})
