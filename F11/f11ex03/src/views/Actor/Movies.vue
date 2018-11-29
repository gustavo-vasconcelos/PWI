<!--
<template>
  <div class="container jumbotron text-left">
    <div class="row">
      <template v-for="movie in $parent.movies">
        <div
          class="col-xl-3 col-md-4 col-sm-6 col-12"
          :key="movie.id + '' + movieActor.id"
          v-for="movieActor in $parent.movieActor"
          v-if="movieActor.movieId === movie.id && movieActor.actorId === $parent.actors[index].id"
        >
          <b-card
            :title="`${movie.title} (${movie.year})`"
            :img-src="movie.photo"
            :img-alt="movie.title"
            img-top
            img-fluid
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 col-sm-6 ml-auto mr-auto p-0 actorMovie text-center"
            @click="cardClicked(movie)"
          ></b-card>
        </div>
      </template>
    </div>

    <div class="text-center mt-2">
      <router-link :to="'/actor/' + $route.params.id">Back</router-link>
    </div>

    <b-modal
      :title="modal.title"
      v-model="modal.show"
      size="lg"
      :hide-footer="true"
      @hidden="clearModal()"
    >
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="'https://www.youtube.com/embed/' + modal.trailerId"
        allowfullscreen
      ></b-embed>
    </b-modal>
  </div>
</template>
-->

<template>
  <div class="container jumbotron text-left">
    <div class="row">
      <div
        class="col-xl-3 col-md-4 col-sm-6 col-12"
        v-for="movie in movieData"
        :key="movie.imdbID"
      >
        <b-card
          :title="`${movie.Title} (${movie.Year})`"
          :img-src="movie.Poster"
          :img-alt="movie.Title"
          img-top
          img-fluid
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 col-sm-6 ml-auto mr-auto p-0 actorMovie text-center"
          @click="cardClicked(movie)"
        ></b-card>
      </div>
    </div>

    <div class="text-center mt-2">
      <router-link :to="`/actor/${$route.params.id}-${$route.params.name}`">Back</router-link>
    </div>

    <b-modal
      :title="modal.title"
      v-model="modal.show"
      size="lg"
      :hide-footer="true"
      @hidden="clearModal()"
    >
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="'https://www.youtube.com/embed/' + modal.trailerId"
        allowfullscreen
      ></b-embed>

    </b-modal>
  </div>
</template>

//https://image.tmdb.org/t/p/w600_and_h900_bestv2/IMAGEM_ID
//https://api.themoviedb.org/3/person/ID_PESSOA?api_key=30a9bd883b54f8b08a0247941e2bbec5&language=en-US
<script>
export default {
  data() {
    return {
      modal: {
        show: false,
        title: "",
        trailerId: ""
      },
      movieData: [],
      index: this.findIndexById(parseInt(this.$route.params.id))
    };
  },
  created() {
    let movies = JSON.parse(localStorage.movies);
    let movieActor = JSON.parse(localStorage.movieActor);
    let jsonData = [];
    movies.forEach(movie => {
      movieActor.forEach(movieAct => {
        if (
          movie.id === movieAct.movieId &&
          movieAct.actorId === parseInt(this.$route.params.id)
        ) {
          fetch(`http://www.omdbapi.com/?i=${movie.imdb}&apikey=3eec600`)
            .then(function(response) {
              return response.json();
            })
            .then(function(myJson) {
              myJson.TrailerId = movie.trailerId
              jsonData.push(myJson);
            });
        }
      });
    });
    this.movieData = jsonData;
  },
  /*
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("actorId")) {
      localStorage.actorId = to.params.id;
    } else if (localStorage.actorId !== to.params.id) {
      localStorage.actorId = to.params.id;
      let movies = JSON.parse(localStorage.movies);
      let movieActor = JSON.parse(localStorage.movieActor);
      let movieData = [];

      movies.forEach(movie => {
        movieActor.forEach(movieAct => {
          if (
            movie.id === movieAct.movieId &&
            movieAct.actorId === parseInt(to.params.id)
          ) {
            const getMovieData = async () => {
              let response = await fetch(
                `http://www.omdbapi.com/?i=${movie.imdb}&apikey=3eec600`
              );
              let json = await response.json();
              movieData.push(json);
            };
            getMovieData()
          }
        });
      });
      localStorage.movieData = JSON.stringify(movieData)
    }

    next();
  },
  */
  methods: {
    findIndexById(id) {
      return this.$parent.actors.findIndex(actor => actor.id === id);
    },
    cardClicked(movie) {
      this.modal.show = true;
      this.modal.trailerId = movie.TrailerId;
      this.modal.title = `${movie.Title} (${movie.Year})`;
    },
    clearModal() {
      this.modal.show = false;
      this.modal.title = "";
      this.modal.trailerId = "";
    }
  }
};
</script>

<style>
.actorMovie:hover {
  transform: scale(1.01) !important;
  cursor: pointer;
}
</style>
