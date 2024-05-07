<script setup lang="ts">

const props = defineProps( {
  id: Number,
  name: String,
  image: String,
  stats: Object,
  types: Array
})

const team = useState('team', () => [])

function addToTeam() {
  team.value.push(props)
}

</script>

<template>
  <article class="flex flex-col justify-center">
    <div class="flex justify-center align-middle gap-12">
      <h1 class="text-5xl">{{ name }}</h1>
      <button @click="addToTeam" class="bg-red-700 text-white px-8">Ajouter</button>
    </div>
    <div class="flex justify-center items-center">
      <img class="w-1/3" :src="image" :alt="name" />
      <div>
        <ul v-if="stats" class="border border-black w-fit rounded-2xl w-full mb-2 p-10">
          <li>HP: {{ stats.hp }}</li>
          <li>Attack: {{ stats.attack }}</li>
          <li>Defense: {{ stats.defense }}</li>
          <li>Special Attack: {{ stats.specialAttack }}</li>
          <li>Special Defense: {{ stats.specialDefense }}</li>
          <li>Speed: {{ stats.speed }}</li>
        </ul>
        <ul class="flex">
          <TypeCard v-for="type in types" :key="type" :name="type.name" :image="type.image" />
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>