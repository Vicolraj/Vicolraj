import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://vicolraj.vercel.app',
      dynamicRoutes: [
        '/',
        // add your other pages below, for example:
        // '/about',
        // '/projects',
        // '/contact',
      ],
    }),
  ],
})