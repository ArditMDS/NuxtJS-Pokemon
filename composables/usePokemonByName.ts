export const usePokemonByName = () => {
    const config = useRuntimeConfig();
    const route = useRoute();
    const queryParams = "language=fr-FR&page=1";
    const baseUrl = 'https://pokebuildapi.fr/api/v1/pokemon';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    }

    async function getPokemonByName(name: string) {
        const url=`${baseUrl}/${name}`;
        return await $fetch(url);
    }

    return { getPokemonByName }
}