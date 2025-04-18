import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/TabL/', // Your deployment subfolder
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // This allows @ to point to /src
    },
  },
})
