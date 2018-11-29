<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actors: [
        {
          id: 1,

          name: "Bruce Willis",
          nationality: "Germany",
          dateBirth: "1955-03-19",
          photo:
            "https://pmcvariety.files.wordpress.com/2018/04/bruce-willis.jpg?w=1000",
          imdb: "nm0000246",

          tmdb: 62
        },
        {
          id: 2,

          name: "Leonardo DiCaprio",
          nationality: "United States",
          dateBirth: "1974-11-11",
          photo:
            "https://assets3.thrillist.com/v1/image/1656352/size/tmg-article_default_mobile.jpg",
          imdb: "nm0000138",

          tmdb: 6193
        },
        {
          id: 3,
          name: "Brad Pitt",
          nationality: "United States",
          dateBirth: "1963-12-18",
          photo:
            "https://postmediacanoe.files.wordpress.com/2018/11/brad-pitt.jpg",
          imdb: "nm0000093",

          tmdb: 287
        }
      ],
      movies: [
        {
          id: 1,
          trailerId: "kg_jH47u480",
          imdb: "tt0120591",
          title: "Armageddon",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          year: 1998
        },
        {
          id: 2,
          trailerId: "VG9AGf66tXM",
          imdb: "tt0167404"
        },
        {
          id: 3,
          trailerId: "8KtYRALe-xo",
          imdb: "tt1320253"
        },
        {
          id: 4,
          trailerId: "ip_CYHdyUBs",
          imdb: "tt1764651"
        },
        {
          id: 5,
          trailerId: "-iRajLSA8TA",
          imdb: "tt0120338"
        }
      ],
      movieActor: [
        { movieId: 1, actorId: 1 },
        { movieId: 2, actorId: 1 },
        { movieId: 3, actorId: 1 },
        { movieId: 4, actorId: 1 },
        { movieId: 5, actorId: 2 }
      ],
      mostPopularActors: []
    };
  },
  methods: {
    getAgeById(id) {
      let index = this.actors.findIndex(actor => actor.id === id);
      let today = new Date();
      let actorDate = new Date(this.actors[index].dateBirth);
      return Math.floor((today - actorDate) * 3.16887646e-11);
    },
    getIndexById(id) {
      return this.actors.findIndex(actor => actor.id === id);
    },
    async getMostPopularActors() {
      const request = await fetch(
        "https://api.themoviedb.org/3/person/popular?api_key=30a9bd883b54f8b08a0247941e2bbec5&language=pt-PT&page=1"
      );

      const response = await request.json();
      response.results.forEach(result => this.movies.push(result.known_for))
      if(this.mostPopularActors)
      this.mostPopularActors = response.results;

      /*
        .then(response => response.json())
        .then(myJson => myJson.results.forEach(actor => jsonData.push(actor)));
      //21-40
      fetch(
        "https://api.themoviedb.org/3/person/popular?api_key=30a9bd883b54f8b08a0247941e2bbec5&language=pt-PT&page=2"
      )
        .then(response => response.json())
        .then(myJson => myJson.results.forEach(actor => jsonData.push(actor)));
      */
      //return jsonData;
    }
  },
  created() {
    this.mostPopularActors = this.getMostPopularActors();
    /*
    if (!localStorage.mostPopularActors) {
      this.mostPopularActors = this.getMostPopularActors();
    }
    if (!localStorage.actors) {
    }
    /*
    if (!localStorage.movies) localStorage.movies = JSON.stringify(this.movies);
    if (!localStorage.movieActor)
      localStorage.movieActor = JSON.stringify(this.movieActor);*/
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
