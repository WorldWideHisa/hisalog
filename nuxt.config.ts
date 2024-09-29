import { globSync } from "glob";
import { resolve } from "path";

const getContentRoutes = (): string[] => {
  const contentPath = resolve("content/**/*.md");
  const routeNames = globSync(contentPath).map((f) => {
    // パスを整形して返す
    const pattern = /.*\/hisalog\/content/;
    return f.replace(pattern, "").replace(".md", "");
  });

  return [...routeNames];
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: getContentRoutes(),
    },
    logLevel: "debug",
  },
  devtools: { enabled: true },
  app: {
    baseURL: "/hisalog/",
    cdnURL: "https://worldwidehisa.github.io/hisalog/",
  },
  modules: ["@nuxt/content"],
  content: {
    sources: {
      content: {
        driver: "fs",
        prefix: "/articles",
        base: resolve(__dirname, "content", "articles"),
      },
    },
  },
});
