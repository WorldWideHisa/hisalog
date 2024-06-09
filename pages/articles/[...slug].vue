<template>
  <main>
    <ContentDoc />
  </main>
</template>

<script setup>
import { useContent } from '@nuxt/content'

// 現在のルートパラメータを取得
const route = useRoute()
const { slug } = route.params

// コンテンツを取得
const { data: article } = await useContent().findOne(slug)

// 記事データを出力してデバッグ
console.log(article)
</script>