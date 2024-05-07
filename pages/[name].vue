<script setup lang="ts">
import {usePokemonByName} from "~/composables/usePokemonByName";
import {onMounted} from "vue";

const route = useRoute();
const name = route.params.name;
const pokemonData = ref([]);

const {getPokemonByName} = usePokemonByName();

onMounted(async () => {
    pokemonData.value = await getPokemonByName(name);
});


</script>

<template>
  <PokemonDetails :name="pokemonData.name" :image="pokemonData.image" :stats="pokemonData.stats" :types="pokemonData.apiTypes"/>
</template>

<style scoped>

</style>