<script>
    import PopularMovies from '../components/PopularMovies.svelte';
    import SearchMovies from '../components/SearchMovies.svelte';
    import {fly} from 'svelte/transition'
    export let data;
</script>


<section in:fly={{y: 50, duration:500, delay:500}} out:fly={{duration:500}}>
    <SearchMovies />
    <PopularMovies {data} />
</section>





  


