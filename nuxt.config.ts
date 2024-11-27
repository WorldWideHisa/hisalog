import { resolve } from "path";
import { globSync } from "glob";

const getContentRoutes = (): string[] => {
  const contentPath = resolve("content/**/*.md");
  const routeNames = globSync(contentPath).map((f) => {
    // パスを整形して返す
    const pattern = /.*\/content/;
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
    baseURL: "/",
    cdnURL: "https://worldwidehisa.github.io/",
  },
  modules: ["@nuxt/content"],
  typescript: {
    shim: false, // VScodeの拡張機能を使うためにfalse
    strict: true, // 型チェックの厳格化
    typeCheck: false, // 開発、build時の型チェックを有効に。vue-tscとtypescriptのインストールが必要
  },
  // tailwindcss: {
  //   cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
  //   configPath: "tailwind.config",
  // },
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
