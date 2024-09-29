<template>
  <div>
    <h1>記事一覧</h1>
    <ul>
      <li v-for="article in articles" :key="article._path">
        <nuxt-link :to="article._path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
// 記事データを取得
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/articles").find(),
);
</script>