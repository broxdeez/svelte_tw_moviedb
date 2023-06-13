const key = import.meta.env.VITE_API;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`


export const load = async ({ fetch }) => {
    const response = await fetch(url)
    const movies = await response.json()
    return {
        movies: movies.results
    }
}