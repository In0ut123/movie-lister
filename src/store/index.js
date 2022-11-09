import { createStore } from 'vuex'
import axios from "axios"

function tsvToArray(str) {
  const headers = ["id","title","genres","year","rating","duration","posterUrl","mainPageUrl"]
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  rows.pop()
  rows.shift()

  const movies = rows.map(function (row) {
    const values = row.split("\t");
    const movie = headers.reduce(function (object, header, index) {
      if (index === headers.length - 1) {
        values[index] = values[index].replace(/(\r\n|\n|\r)/gm, "")
      }
      if (header === "genres") {
        values[index] = values[index].replace(/\[|\]|\'/gm, "")
        let genres = values[index].split(", ")
        object[header] = genres
      } else if (header === "year" || header === "rating" || header === "duration") {
        object[header] = parseInt(values[index])
      } else {
        object[header] = values[index];
      }
      
      return object;
    }, {});
    return movie;
  });

  return movies;
}

const store = createStore({
  state () {
    return {
      movies: []
    }
  },
  mutations: {
    setMovies (state, newMovies) {
      state.movies = newMovies
    }
  },
  actions: {
    async loadMovies({commit}) {
      try {
        const res = await axios({
          url: "/data.tsv",
          method: "GET",
          responseType: "blob"
        });
        const reader = new FileReader();
        
        reader.onload = function (e) {
          const text = e.target.result;
          commit("setMovies", tsvToArray(text))
        }

        reader.readAsText(res.data)
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    movies(state) {
      return state.movies;
    }
  }
})

export default store