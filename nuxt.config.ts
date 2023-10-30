import type { NuxtConfig } from "@nuxt/types"

// https://nuxt.com/docs/api/configuration/nuxt-config
const config: NuxtConfig = {
  devtools: { enabled: true },
  buildModules: ["@nuxt/typescript-build"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  srcDir: "src/",
}

export default config
