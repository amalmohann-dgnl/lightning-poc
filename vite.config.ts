import { defineConfig } from 'vite';

/**
 * Vite Config
 */
export default defineConfig(({ command, mode, ssrBuild, }) => {
  return {
    base: './',
    publicDir: 'static',
    build: {
      minify: true,
      sourcemap: true,
    },
  }
})
