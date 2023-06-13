const key = import.meta.env.VITE_API;
export const load = async ({ fetch, params }) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&language=en-US`
    )
    const desc = await response.json()
    return {
        movieDesc: desc
    }
}