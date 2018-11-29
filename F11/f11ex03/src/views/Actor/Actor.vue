<template>
	<div class="about">
		<router-link :to="{name: 'actorData', params: {id: $route.params.id, name: $route.params.name}}">
			<h1>Personal data</h1>
		</router-link>
		<router-link :to="{name: 'actorMovies', params: {id: $route.params.id, name: $route.params.name}}">
			<h1>Movies list</h1>
		</router-link>
	</div>
</template>

<script>
export default {
	/*
  beforeRouteLeave(to, from, next) {
    if (to.name === "actorMovies") {
      if (this.$parent.moviesData.actorId !== to.params.id) {
        this.$parent.moviesData.actorId = to.params.id;
        let imdbList = []
        this.$parent.movieActor.forEach(movieActor => {
          this.$parent.movies.forEach(movie => {
            console.log(this.$parent.moviesData.actorId === movieActor.actorId)
            if(movie.id === movieActor.movieId && this.$parent.moviesData.actorId === movieActor.actorId) {
              imdbList.push(movie.imdb)
            }
          })
        })
        console.log(imdbList)
      }
    }
    next();
  }*/
}
</script>
