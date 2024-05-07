<script setup lang="ts">
const team = useState('team')
</script>

<template>
  <div class="px-10">

      <h1 class="text-5xl py-5 text-center">Mon équipe</h1>
      <div class="grid grid-cols-4 gap-5">
        <PokemonCard v-for="pokemon in team" :name="pokemon.name" :image="pokemon.image"></PokemonCard>
      </div>
  </div>
</template>

<style scoped>

</style>