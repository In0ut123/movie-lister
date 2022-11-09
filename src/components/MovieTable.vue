<template>
    <div>
        <div>
            Sort by:
            <select name="sort" v-model="sort">
                <option value=""></option>
                <option value="title">Title</option>
                <option value="duration">Duration</option>
                <option value="year">Year</option>
                <option value="rating">Rating</option>
            </select>
            <select name="sort-type" v-model="sortType">
                <option value="ascending" selected>^</option>
                <option value="descending">v</option>
            </select>
        </div>
        <div>
            Filter by:
            <select name="sort" v-model="filter">
                <option value=""></option>
                <option value="genre">Genre</option>
                <option value="duration">Duration</option>
                <option value="title">Title</option>
            </select>
            <input type="text" v-model="filterValue">
        </div>
        <div v-for="movie in sortedMovies">
            <MovieRow :movie="movie" />
        </div>
    </div>
</template>

<script>
import MovieRow from "@/components/MovieRow.vue"
export default {
    name: "MovieTable",
    components: {
        MovieRow,
    },
    props: {
        movies: {
            type: Array
        }
    },
    data() {
        return {
            sort: "",
            sortType: "ascending",
            filter: "",
            filterValue: "",
        }
    },
    computed: {
        filteredMovies() {
            if (this.filter === "genre") {
                return this.movies.filter(movie => movie.genres.includes(this.filterValue))
            } else if (this.filter === "duration") {
                return this.movies.filter(movie => movie.duration === parseInt(this.filterValue))
            } else if (this.filter === "title") {
                return this.movies.filter(movie => movie.title.includes(this.filterValue))
            }

            return this.movies;
        },
        sortedMovies() {
            let sorted = this.filteredMovies;
            if (this.sort === "title") {
                sorted.sort(function(a, b) {
                    if ( a.title < b.title ){
                        return -1;
                    }
                    if ( a.title > b.title ){
                        return 1;
                    }
                    return 0;
                });
            } else if (this.sort === "duration")  {
                sorted.sort(function(a, b) {
                    return a.duration - b.duration;
                });
            } else if (this.sort === "year")  {
                sorted.sort(function(a, b) {
                    return a.year - b.year;
                });
            } else if (this.sort === "rating")  {
                sorted.sort(function(a, b) {
                    return a.rating - b.rating;
                });
            }

            if (this.sort !== "" && this.sortType === "descending") {
                sorted.reverse();
            }

            return sorted;
        }
    }
}
</script>