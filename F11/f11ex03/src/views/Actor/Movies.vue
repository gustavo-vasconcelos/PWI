
<template>
	<div class="container jumbotron text-left">
		<div class="row">
			<template v-for="movie in $parent.movies">
				<div
					class="col-xl-3 col-md-4 col-sm-6 col-12"
					v-for="movieActor in $parent.movieActor"
					:key="movie.id + '' + movieActor.id"
					v-if="movieActor.movieId === movie.tmdb && movieActor.actorId === getActorTmdbById(parseInt($route.params.id))"
				>
					<b-card
						:title="`${movie.title} (${movie.release_date.substr(0, 4)})`"
						:img-src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + movie.poster_path"
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
			<router-link :to="{name: 'actor', params: {id: $route.params.id, name: $route.params.name}}">Back</router-link>
		</div>

		<b-modal
			:title="modal.title"
			v-model="modal.show"
			size="lg"
			:hide-footer="true"
			@hidden="clearModal()"
		>
			{{ modal.body }}
			<br><br>
			<b-button variant="primary" class="col-12" :href="modal.link" target="_blank">MORE INFO</b-button>
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
				body: "",
				link: ""
			},
			movieData: [],
			index: this.findIndexById(parseInt(this.$route.params.id))
		}
	},
	created() {
		let movies = JSON.parse(localStorage.movies)
		let movieActor = JSON.parse(localStorage.movieActor)
		let jsonData = []
	},
	methods: {
		getActorTmdbById(actorId) {
			let index = this.$parent.actors.findIndex(actor => actor.id === actorId)
			return this.$parent.actors[index].tmdb
		},
		findIndexById(id) {
			return this.$parent.actors.findIndex(actor => actor.id === id)
		},
		cardClicked(movie) {
			this.modal.show = true
			this.modal.title = `${movie.title} (${movie.release_date.substr(0, 4)})`
			this.modal.body = movie.overview
			this.modal.link = "https://www.themoviedb.org/movie/" + movie.tmdb
		},
		clearModal() {
			this.modal.show = false
			this.modal.title = ""
			this.modal.body = ""
			this.modal.link = ""
		}
	}
}
</script>

<style>
.actorMovie:hover {
	transform: scale(1.01) !important;
	cursor: pointer;
}
</style>
