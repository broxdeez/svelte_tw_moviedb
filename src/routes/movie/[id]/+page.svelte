<script>
    import { fly } from 'svelte/transition';
    export let data;
    let detail = data.movieDesc
    console.log(detail)
</script>

<div in:fly={{y: 50, duration:600}} out:fly={{duration:500}} class='p-24 md:w-2/3 md:mx-auto'>
    <div>
        <img class='rounded-3xl' src={'https://image.tmdb.org/t/p/original' + detail.backdrop_path} alt={detail.title}>
    </div>
    <div class='mt-12'>
        <h1 class='font-bold text-xl'>
            {detail.title}
        </h1>
        <p class='mt-8 leading-7 font-roboto'>{detail.overview}</p>
        <p class='mt-10'>
            <span class='font-semibold'>Release Date:</span> {detail.release_date} <br />
            <span class='font-semibold'>Budget: </span> ${detail.budget}<br />
            <span class='font-semibold'>Rating: </span> {detail.vote_average}<br />
            <span class='font-semibold'>Runtime: </span> {detail.runtime} mins<br />
        </p>
    </div>
</div>
