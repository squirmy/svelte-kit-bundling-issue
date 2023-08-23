import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  // ssr: {
  //   noExternal: true,
  //   target: 'webworker'
  // },
  // build: {
  //   ssr: true,
  //   minify: false,
  //   rollupOptions: {
  //     input: {
  //       app: 'src/main.ts',
  //     }
  //   }
  // }
})
