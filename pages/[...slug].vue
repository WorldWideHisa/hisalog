<template>
  <div>
    <p>Loading document at(先頭/なし): {{ slug.join('/') }}</p>
    <ContentDoc :path="`/1`" />
    <!-- <ContentDoc :path="`/${slug.join('/')}`" /> -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const slug = route.params.slug;
console.log('Fetching document at:', `/${slug.join('/')}`);
</script>