<script>
	import MovieCard from "./MovieCard.svelte";
    export let data;
</script>

<h2 class='px-24 font-bold my-10'>
    Popular Movies
</h2>
<div class='px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
    {#each data.movies as movie}
        <MovieCard {movie} />
    {/each}
</div>

