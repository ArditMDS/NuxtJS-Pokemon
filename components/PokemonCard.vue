<script setup lang="ts">
const props = defineProps({
  id: Number,
  name: String,
  image: String,
  link: String,
  addable: Boolean
})

const team = useState('team', () => [])

function addToTeam() {
  team.value.push(props)
}

function deleteFromTeam() {
  team.value = team.value.filter(pokemon => pokemon.name !== props.name)
}

</script>

<template>
  <div class="relative">
    <NuxtLink class=" flex justify-center text-center w-full" :to="link">
      <article class="border border-red-600 w-full">
        <img :src="image" :alt="name" class="w-40 h-40"/>
        <h2 class="font-bold">{{ name }}</h2>
      </article>
    </NuxtLink>
    <button v-if="addable" @click="addToTeam" class="bg-red-700 text-white absolute px-2 top-0 right-0 h-full">Ajouter</button>
    <button v-if="!addable" @click="deleteFromTeam" class="bg-red-700 text-white absolute px-2 top-0 right-0 h-full">Supprimer</button>
  </div>
</template>

<style scoped>

</style>