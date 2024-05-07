export const usePokemons = () => {
    const config = useRuntimeConfig();
    const route = useRoute();
    const queryParams = "language=fr-FR&page=1";
    const baseUrl = 'https://pokebuildapi.fr/api/v1/pokemon/limit';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    }

    async function getPokemons(limit: number) {
        const url=`${baseUrl}/${limit}`;
        return await $fetch(url);
    }

    return { getPokemons }
}