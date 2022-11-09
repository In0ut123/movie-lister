<template>
  <main>
    <div class="d-flex">
      <div class="justify-center">
        <MovieTable :movies="this.movies" />
      </div>
  </div>
  </main>
</template>

<script>
import MovieTable from "@/components/MovieTable.vue"
import {mapGetters} from 'vuex';

export default {
  name: "HomeView",
  components:{
    MovieTable
  },
  async mounted() {
    try {
      const store = this.$store;
      await store.dispatch("loadMovies")
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    ...mapGetters({
      movies: "movies"
    }),
  },
}
</script>