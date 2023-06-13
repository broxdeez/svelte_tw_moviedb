<script>
    import MovieCard from "../../../components/MovieCard.svelte";
    export let data;
</script>

<div class='mt-10 px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
    {#each data.searchRes.results as movie}
        <MovieCard {movie} />
    {/each}
</div>