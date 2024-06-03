// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  srcDir: "articles/",
  content: {
    sources: [path.join(__dirname, "content")],
  },
})