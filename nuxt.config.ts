import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'github-pages'
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    sources: {
      content: {
        driver: 'fs',
        prefix: '/articles', // All contents inside this source will be prefixed with `/docs`
        base: resolve(__dirname, 'content', 'articles')
      }
    }
  }
})
