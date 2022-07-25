import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@comp': resolve(__dirname, 'src/components')
    }
  },
  build: {
    minify: 'terser', // 默认为esbuild
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true // 生产环境移除debugger
      }
    }
  },
  plugins: [vue(),
    AutoImport({

      // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
      imports: ['vue']
    })]
})
