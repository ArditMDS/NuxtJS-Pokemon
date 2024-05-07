export const useTypes = () => {
    const config = useRuntimeConfig();
    const route = useRoute();
    const queryParams = "language=fr-FR&page=1";
    const baseUrl = 'https://pokebuildapi.fr/api/v1/types';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    }

    async function getTypes() {
        const id = route.params.id;
        const url=`${baseUrl}`;
        return await $fetch(url);
    }

    return { getTypes }
}