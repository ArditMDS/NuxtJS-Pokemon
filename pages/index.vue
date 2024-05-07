<script setup lang="ts">
import {onMounted} from "#imports";

const {getTypes} = useTypes()
const {getPokemons} = usePokemons()
const types = ref([])
const pokemons = ref([])

onMounted(async () => {
  types.value = await getTypes()
  pokemons.value = await getPokemons(100)
}
)
</script>

<template>
<div class="flex justify-center flex-col">
  <h1 class="text-2xl text-center my-8">Applis pokemon de fou</h1>
  <input class="border border-black mx-10" type="text" placeholder="Chercher un pokémon par nom">
  <div class="grid grid-cols-12 mt-8 px-10">
    <TypeCard v-for="type in types" :name="type.name" :image="type.image"></TypeCard>
  </div>
  <div class="grid grid-cols-4 gap-2 px-10 flex-wrap my-8 relative">
    <PokemonCard v-for="pokemon in pokemons" :addable="true" :name="pokemon.name" :image="pokemon.image" :link="pokemon.name"></PokemonCard>
  </div>
</div>
</template>

<style scoped>

</style>