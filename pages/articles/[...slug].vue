<template>
  <div v-if="article">
    <ContentDoc :document="article" />
  </div>
  <div v-else>
    <p>記事が見つかりませんでした。</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { queryContent } from '@nuxt/content'

const article = ref(null)
const route = useRoute()

onMounted(async () => {
  const { slug } = route.params
  const path = `/articles/${slug.join('/')}`
  article.value = await queryContent(path).fetchOne()
})
</script>