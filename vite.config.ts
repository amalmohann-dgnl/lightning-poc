import { defineConfig } from 'vite';

/**
 * Vite Config
 */
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    build: {
      minify: false,
      sourcemap: true,
    },
  }
})
