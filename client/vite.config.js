import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Layouts from "vite-plugin-vue-layouts";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
              @import "@/styles/variables.less";
              @import "@/styles/mixins.less";
            `,
      },
    },
  },
  plugins: [
    VueRouter(),
    Components({
      deep: true,
      directives: true,
      dirs: ["src/components"],
      extensions: ["vue"],
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      dirs: ["src/composables"],
      imports: [
        "vue",
        VueRouterAutoImports,
        {
          "@unhead/vue": ["useHead"],
          axios: [
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
        },
        {
          pinia: ["defineStore", "storeToRefs"],
        },
      ],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
    }),
    vue(),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
