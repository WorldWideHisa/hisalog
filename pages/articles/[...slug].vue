<template>
  <div>
    <h1>{{ doc.title }}</h1>
    <Content :document="doc" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useContent } from '@nuxt/content'

const route = useRoute()
const { data: doc } = await useContent(`/articles/${route.params.slug}`).fetch()
</script>
