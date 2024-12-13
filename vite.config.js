import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import * as path from 'path';
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: true,
  },
  plugins: [
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true
      },
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
      dts: "src/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@hooks":path.resolve(__dirname, "src/hooks"),
      "@api": path.resolve(__dirname, "src/api"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@store": path.resolve(__dirname, "src/store"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@i18n": path.resolve(__dirname, "src/locales"),
    },
    extensions: ['.js', '.ts', '.vue','.mjs','.jsx','.tsx','.json'],
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
})
