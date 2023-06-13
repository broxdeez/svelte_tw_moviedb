<script>
    export let movie;
</script>

<div>
    <a data-sveltekit-preload-data data-sveltekit-noscroll href={'/movie/' + movie.id}>
    <img class='w-full h-2/3 object-cover rounded-2xl mb-4' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
    </a>
    <div>
        <h2 class='font-bold text-sm mb-2'>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>

