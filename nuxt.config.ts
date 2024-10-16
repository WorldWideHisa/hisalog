import { resolve } from "path";
import { globSync } from "glob";

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
  typescript: {
    shim: false, // VScodeの拡張機能を使うためにfalse
    strict: true, // 型チェックの厳格化
    typeCheck: true, // 開発、build時の型チェックを有効に。vue-tscとtypescriptのインストールが必要
  },
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
