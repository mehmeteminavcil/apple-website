import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "emin-sw",
    project: "apple-website"
  }), sentryVitePlugin({
    org: "emin-sw",
    project: "apple-website"
  })],

  build: {
    sourcemap: true
  }
})