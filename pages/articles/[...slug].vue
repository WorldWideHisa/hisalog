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
import { useAsyncData } from '#app'

const article = ref(null)
const route = useRoute()

const { data, error } = useAsyncData(async () => {
  const { slug } = route.params
  const path = `/articles/${slug.join('/')}`
  return await $content(path).fetch()
})

article.value = data.value
</script>