import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mdx from '@mdx-js/rollup'
import { babel } from '@rollup/plugin-babel'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    mdx({
      jsx: true,
    }),
    babel({
      // Also run on what used to be `.mdx` (but is now JS):
      extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
      plugins: ['@vue/babel-plugin-jsx'],
    }),
  ],
  build: {
    manifest: true,
  },
})
