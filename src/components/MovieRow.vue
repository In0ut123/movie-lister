<template>
    <div class="movie-row">
        <img :src="movie.posterUrl">
        <a :href="movie.mainPageUrl" target="_blank">{{movie.title}}</a>
        <div class="inline-stack-container">
            <span class="movie-field"><b>Rating:</b> {{movie.rating}}</span>
            <div class="movie-field"><b>Duration:</b> {{movie.duration}}min</div>
            <div class="movie-field"><b>Genres:</b></div>
            <div v-for="genre in movie.genres" class="movie-field"> {{genre}} </div>
            <div class="movie-field"><b>Year:</b> {{movie.year}}</div>
        </div>
        <div class="inline-stack-container">
            
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieRow",
    props: {
        movie: {
            type: Object
        }
    }
}
</script>

<style scoped>
.movie-row {
    display: flex;
    align-items: center;
    padding: 2px;
    border-bottom: 1px solid rgb(196, 196, 196);
}

.inline-stack-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1px 2px;
}

img {
    height: 60px;
    width: auto;
}

.movie-field {
    padding-left: 2px;
}

b {
    font-weight: 900;
}
</style>