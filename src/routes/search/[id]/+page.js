const key = import.meta.env.VITE_API;
export const load = async ({ fetch, params }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${params.id}&api_key=${key}`
    )
    const searched = await response.json()
    return {
        searchRes: searched
    }
}
