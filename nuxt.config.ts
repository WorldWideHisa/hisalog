// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'github-pages'
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    sources: {
      github: {
        prefix: '/articles', // Prefix for routes used to query contents
        driver: 'github', // Driver used to fetch contents (view unstorage documentation)
        repo: "WorldWideHisa/wwh-blog-content",
        branch: "main",
        dir: "content/articles", // Directory where contents are located. It could be a subdirectory of the repository.
        // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
      },
    }
  }
})