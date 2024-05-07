<script setup lang="ts">
const props = defineProps({
  id: Number,
  name: String,
  image: String,
  link: String
})
</script>

<template>
  <button class="flex border border-black w-fit px-3 py-2 rounded">
    <img :src="image" alt="image" class="w-10 h-10"/>
    <h2>{{ name }}</h2>
  </button>
</template>

<style scoped>

</style>