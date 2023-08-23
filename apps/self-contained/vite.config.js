import { defineConfig } from 'vite'

export default defineConfig({
  ssr: {
    noExternal: true,
    target: 'webworker'
  },
  build: {
    ssr: true,
    minify: false,
    rollupOptions: {
      input: {
        app: 'src/main.ts',
      }
    }
  }
})
